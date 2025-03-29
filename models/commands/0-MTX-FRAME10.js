module.exports.config = {
  name: "frame10",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "uzairrajput",///don't change my Credit Coz i Edit 
  description: "Get Pair From Mention",
  commandCategory: "img",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "jimp": ""
  }
};

module.exports.onLoad = async() => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/uzair/mtx/`;
  const path = resolve(__dirname, 'uzair/mtx', 'frame10.jpg');
  if (!existsSync(dirMaterial + "mtx")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.imgur.com/9ltyeNL.jpeg", path);
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"]; 
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "uzair", "mtx");

  let batgiam_img = await jimp.read(__root + "/frame10.jpg");
  let pathImg = __root + `/batman${one}_${two}.jpeg`;
  let avatarOne = __root + `/avt_${one}.jpeg`;
  let avatarTwo = __root + `/avt_${two}.jpeg`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(500, 500), 17000, 540).composite(circleTwo.resize(940, 940), 1205, 1145);

  let raw = await batgiam_img.getBufferAsync("image/jpeg");

  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}
async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);
  if (!mention[0]) return api.sendMessage("𝑃𝑙𝑒𝑎𝑠𝑒 𝐴𝑘. 𝐼𝑑 𝐾𝑜 𝑀𝑒𝑛𝑡𝑖𝑜𝑛 𝐾𝑎𝑟𝑒𝑛.", threadID, messageID);
  else {
      const one = senderID, two = mention[0];
      return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐶𝑜𝑑𝑒 𝐵𝑦 : 𝑈𝑧𝑎𝑖𝑟 𝑅𝑎𝑗𝑝𝑢𝑡", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
  }
}
