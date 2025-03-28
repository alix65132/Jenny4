module.exports.config = {
  name: "pair2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "It's a compound :>",
  commandCategory: "fun",
  usages: "",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 15
}

module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/background.png";
  let pathAvt1 = __dirname + "/cache/avt.png";
  let pathAvt2 = __dirname + "/cache/avt2.png";
  
  var id1 = event.senderID;
  var name1 = await Users.getNameUser(id1);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
  var all = ThreadInfo.userInfo
  for (let c of all) {
    if (c.id == id1) var gender1 = c.gender;
  };
  const botID = api.getCurrentUserID();
  let ungvien = [];
  if(gender1 == "FEMALE"){
    for (let u of all) {
      if (u.gender == "MALE") {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
      }
    }
  }
  else if(gender1 == "MALE"){
    for (let u of all) {
      if (u.gender == "FEMALE") {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
      }
    }
  }
  else {
  for (let u of all) {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
    }
  }
  var id2 = ungvien[Math.floor(Math.random() * ungvien.length)];
  var name2 = await Users.getNameUser(id2);
  var rd1 = Math.floor(Math.random() * 100) + 1;
  var cc = ["0", "-1", "99,99", "-99", "-100", "101", "0,01"];
  var rd2 = cc[Math.floor(Math.random() * cc.length)];
  var djtme = [`${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd2}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`];
  
  var tile = djtme[Math.floor(Math.random() * djtme.length)];

  var background = [
  "https://i.imgur.com/MtdBOid.jpeg"
  ];
  var rd = background[Math.floor(Math.random() * background.length)];
  
  let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id1}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

  let getAvthai = (
    await axios.get(
      `https://graph.facebook.com/${id2}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt2, Buffer.from(getAvthai, "utf-8"));

  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));

  let baseImage = await loadImage(pathImg);
  let baseAvt1 = await loadImage(pathAvt1);
  let baseAvt2 = await loadImage(pathAvt2);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 1, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvt1, 182, 168, 162, 160);
  ctx.drawImage(baseAvt2, 495, 166, 160, 160);
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvt1);
  fs.removeSync(pathAvt2);
  return api.sendMessage({ body: `𝐂𝐫𝐞𝐝𝐢𝐭 ➻    𝐌𝐫 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭\n\n◈ ━━━━━━━━━━━━ 💚✨\n\nحـــسن وجوانـــی ســـے کوئـــی غـــرض نہـــیں ہـــم عـــمر کـــے ہـــر حصـــے مـــیں چاہیـــں گـــے تمہیـــں:-((🐋🥹💍\n\n◈ ━━━━━━━━━━━━ 💚✨\n\n➻𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬 ❤️🥳,\n\n ${name1} \n\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐩𝐚𝐢𝐫𝐞𝐝 𝐰𝐢𝐭𝐡 🫣💨\n\n ${name2}\n\n◈ ━━━━━━━━━━━━ 💚✨\n\n❤️🌸 𝐓𝐡𝐞 𝐨𝐝𝐝𝐬 𝐚𝐫𝐞:〘${tile}%〙`,
            mentions: [{
          tag: `${name2}`,
          id: id2
        }], attachment: fs.createReadStream(pathImg) },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID);
}
