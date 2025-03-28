module.exports.config = {
    name: "date2",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Mention your partner",
    commandCategory: "Love",
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
    const path = resolve(__dirname, 'uzair/mtx', 'married.jpeg');
    if (!existsSync(dirMaterial + "mtx")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/MuC0VR8.jpeg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "uzair", "mtx");

    let batgiam_img = await jimp.read(__root + "/married.jpeg");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(90, 90), 145, 140).composite(circleTwo.resize(90, 90), 230, 160);
    
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
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Please tag1 person", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐋𝐨𝐆 𝐊𝐞𝐇𝐭𝐞 𝐇𝐚𝐈𝐧,\n𝐊𝐞 𝐌𝐨𝐇𝐚𝐁𝐛𝐀𝐭 𝐌𝐞,\n𝐒𝐚𝐁 𝐊𝐮𝐂𝐡 𝐉𝐚𝐈𝐲𝐄𝐳 𝐇𝐨𝐓𝐚 𝐇𝐚𝐈,\n\n𝐏𝐚𝐑 𝐆𝐚𝐋𝐚𝐓 𝐊𝐞𝐇𝐭𝐄 𝐇𝐚𝐈,\n 𝐌𝐨𝐇𝐚𝐁𝐛𝐀𝐭 𝐒𝐢𝐑𝐟,\n𝐍𝐢𝐊𝐚𝐇 𝐣𝐚𝐈𝐲𝐄𝐳 𝐇𝐨𝐓𝐚 𝐇𝐚𝐈,\n\n< 𝐔𝐳𝐚𝐢𝐫 𝐖𝐫𝐢𝐭𝐞𝐬 >\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
      }
