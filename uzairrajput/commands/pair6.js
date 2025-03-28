module.exports.config = {
        name: "pair6",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput",
        description: "MADE BY UZAIR RAJPUT MTX",
        commandCategory: "Picture",
        cooldowns: 5,
        dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/uzair/mtx/`;
    const path = resolve(__dirname, 'uzair/mtx', 'uzarb.jpg');
    if (!existsSync(dirMaterial + "mtx")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/n60g365.jpeg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "uzair", "mtx");

    let pairing_img = await jimp.read(__root + "/uzarb.jpg");
    let pathImg = __root + `/pairing_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(235, 235), 318, 180).composite(circleTwo.resize(232, 232), 653, 175);

    let raw = await pairing_img.getBufferAsync("image/png");

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
module.exports. run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Tran Duc Bo";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: `𝐂𝐫𝐞𝐝𝐢𝐭 ➻    𝐌𝐫 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭\n\n◈ ━━━━━━━━━━━━ 💚✨\n\n𝐓𝐮𝐦 𝐌𝐞𝐫𝐢 𝐙𝐢𝐧𝐝𝐚𝐠𝐢 𝐊𝐢 𝐒𝐚𝐛 𝐂 𝐊𝐡𝐮𝐛𝐬𝐮𝐫𝐚𝐭 𝐇𝐚𝐪𝐢𝐪𝐚𝐭 𝐇𝐨. 🥰💯♥️\n\n◈ ━━━━━━━━━━━━ 💚✨\n\n➻ 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬 ❤️🥳, ${namee} \n\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐩𝐚𝐢𝐫𝐞𝐝 𝐰𝐢𝐭𝐡 🫣💨\n\n ${name} \n\n◈ ━━━━━━━━━━━━ 💚✨\n\n❤️🌸 𝐓𝐡𝐞 𝐃𝐨𝐮𝐛𝐥𝐞 𝐎𝐝𝐝𝐬 𝐚𝐫𝐞: 〘${tle}〙`, mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
}
