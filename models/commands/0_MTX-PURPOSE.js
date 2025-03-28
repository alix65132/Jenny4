module.exports.config = {
  name: "purpose",
  version: "7.3.1",
  hasPermssion: 0,
  credits: " uzairrajput",///don't change my Credit uzairrajput edit
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
  const dirMaterial = __dirname + `/cache/canvas/`;
  const path = resolve(__dirname, 'cache/canvas', 'lovep.png');
  if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.imgur.com/VKvcNUA.jpg", path); 
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"]; 
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "cache", "canvas");

  let batgiam_img = await jimp.read(__root + "/lovep.png");
  let pathImg = __root + `/batman${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(200, 200), 60, 180).composite(circleTwo.resize(200, 200), 610, 180);

  let raw = await batgiam_img.getBufferAsync("image/png");

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
  if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
  else {
      const one = senderID, two = mention[0];
      return makeImage({ one, two }).then(path => api.sendMessage({ body: "‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨ 💐\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n‎‎[•||•●•||•┼┼──🌸,,💟..𝐀𝐧𝐤𝐡𝐨 𝐦𝐞 𝐛𝐚𝐬𝐚𝐥𝐮 𝐭𝐮𝐣𝐡𝐤𝐨. 💟\n\n...💗 𝐒𝐡𝐞𝐞𝐬𝐡𝐞 𝐦𝐞 𝐭𝐞𝐫𝐚 𝐝𝐞𝐞𝐝𝐚𝐫 𝐡𝐨...💗 🥰•||•🐬•||•]]\n\n🌹✦━━━━━🌹━━🌹━━━━━✦🌹\n\n[•||•●•||•┼┼──🌸🌿 𝐀𝐤 𝐰𝐚𝐪𝐭 𝐚𝐢𝐬𝐚 𝐚𝐲𝐞 𝐳𝐢𝐧𝐝𝐠𝐢 𝐦𝐞 𝐤𝐞...💚\n\n💜.. 𝐭𝐮𝐣𝐡𝐤𝐨 𝐛𝐡𝐢 𝐡𝐮𝐦𝐬𝐞 𝐩𝐲𝐚𝐫 𝐡𝐨 ..💜\n\n♥️✨ 𒁍💐 𝑼𝒛𝒂𝒊𝒓 𝑴𝑻𝑿 💚✨ 💐\n\n•||•🌸•||• ]]\n\n🌹✦━━━━━🌹━━🌹━━━━━✦🌹", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
  }
}
