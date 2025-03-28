module.exports.config = {
    name: "cpl",
    version: "2.6.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "",
    commandCategory: "Love",
    usages: "[tag]",
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
    const path = resolve(__dirname, 'uzair/mtx', 'love.jpg');
    if (!existsSync(dirMaterial + "mtx")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/AgvjN3s.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "uzair", "mtx");

    let tromcho_img = await jimp.read(__root + "/uzair.jpeg");
    let pathImg = __root + `/love_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    tromcho_img.composite(circleOne.resize(235, 235), 44, 77).composite(circleTwo.resize(240, 228), 462, 80);

    let raw = await tromcho_img.getBufferAsync("image/png");

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
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Please tag 1 person", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "__)🍒_🐼🦋🌈 __)🍒_🐼🦋🌈𝑨𝑮𝑨𝑹 𝑫𝑬𝑲𝑯 𝑷𝑨𝑻𝑬 𝑻𝑼𝑴‏________𝑴𝑬𝑹𝑰 𝑪𝑯𝑨𝑯𝑨𝑻 𝑲𝑰 𝑰𝑵𝑻𝑬𝑯𝑨😊🦋 😊🦋\n\n"  +  tag + '\n\n❤︎𝑻𝑾 <𝑯𝑨𝑴 𝑻𝑼𝑴> 𝑺𝑬 𝑵𝑨𝑯𝑰 <𝑻𝑼𝑴 𝑯𝑨𝑴> 𝑺𝑬 𝑴𝑶𝑯𝑨𝑩𝑩𝑨𝑻 𝑲𝑨𝑹𝑻𝑬❤︎______ ☺️✨❤️\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨',
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
