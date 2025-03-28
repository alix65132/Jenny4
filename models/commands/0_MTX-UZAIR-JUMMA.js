const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "jumma",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "no prefix",
  usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gifs = [
    "https://i.imgur.com/HQLXNWf.mp4",
    "https://i.imgur.com/NOMUwD2.mp4",
    "https://i.imgur.com/ioUdv5R.mp4",
    "https://i.imgur.com/ercyJK1.mp4",
    "https://i.imgur.com/67ua7D2.mp4",
    "https://i.imgur.com/eLiQGGn.mp4",
    "https://i.imgur.com/vOGbzUc.mp4",
    "https://i.imgur.com/7Sz3YjR.mp4",
    "https://i.imgur.com/FKoqNS9.mp4",
];

const messages = [
    "𝑭𝑹𝑰𝑫𝑨𝒀 𝑨𝑳𝑳𝑨𝑯 𝑨𝑪𝑪𝑬𝑷𝑻 𝑬𝑽𝑬𝑹𝒀 𝑳𝑰𝑻𝑻𝑳𝑬 𝑫𝑼𝑨 𝑾𝑬 𝑴𝑨𝑲𝑬 𝑶𝑵 𝑻𝑯𝑰𝑺 𝑩𝑳𝑨𝑺𝑺𝑬𝑫 𝑩𝑳𝑨𝑺𝑺𝑬𝑫 𝑫𝑨𝒀,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n {name}। \n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "🌺𝑱𝑼𝑴𝑴𝑨 𝑴𝑼𝑩𝑨𝑹𝑨𝑲🌺 𝑨𝑮𝑨𝑹 𝑨𝑳𝑳𝑨𝑯 𝑷𝑨𝑹 𝑩𝑨𝑯𝑹𝑶𝑺𝑨 𝑲𝑨𝑹𝑵𝑨 𝑺𝑰𝑲𝑯𝑵𝑨 𝑯𝑶 𝑻𝑾 𝑷𝑨𝑹𝑬𝑵𝑫𝑶 𝑺𝑰𝑲𝑯𝑶..\n\n𝑲𝑬 𝑱𝑨𝑩 𝑾𝑶 𝑺𝑯𝑨𝑴 𝑲𝑶 𝑮𝑯𝑨𝑹 𝑱𝑨𝑻𝑬 𝑯𝑨𝑰 𝑻𝑾 𝑼𝑵𝑲𝑰 𝑪𝑯𝑶𝑵𝑪𝑯 𝑴𝑬 𝑲𝑨𝑳 𝑲𝑬 𝑳𝑰𝒀𝑬 𝑲𝑰𝑶.𝑫𝑨𝑵𝑨 𝑵𝑨𝑯𝑰 𝑯𝑶𝑻𝑨\n\n◈━━━━━━━━━━━━━━━━💚✨, {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "❣️𝑱𝑼𝑴𝑴𝑨 𝑴𝑼𝑩𝑨𝑹𝑨𝑲❣️\n\n𝑨𝑳𝑳𝑨𝑯 𝑺𝑬 𝑩𝑨𝑺𝑺 𝒀𝑨𝑯𝑰 𝑫𝑼𝑨 𝑲𝑨𝑹𝑶 <𝒀𝑨 𝑨𝑳𝑳𝑨𝑯> 𝑴𝑬𝑹𝑰 𝑲𝑯𝑼𝑺𝑯𝑰 𝑺𝑬 𝒁𝑨𝑫𝑨 𝑴𝑬𝑹𝑬 𝑳𝑰𝒀𝑬 𝑨𝑷𝑲𝑰 𝑹𝑨𝒁𝑨 𝒁𝑨𝑫𝑨 𝒁𝑨𝑹𝑶𝑹𝑰 𝑯𝑨𝑰 𝑱𝑶 𝑴𝑬𝑹𝑬 𝑯𝑨𝑸 𝑴𝑬 𝑩𝑬𝑯𝑻𝑨𝑹 𝑯𝑶 𝑩𝑨𝑺𝑺 𝑾𝑶𝑯𝑰 𝑭𝑬𝑺𝑳𝑨 𝑲𝑨𝑹𝑵𝑨\n\n◈━━━━━━━━━━━━━━━━💚✨ {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨,\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "♥️🕋𝐀𝐬𝐬𝐚𝐥𝐚𝐦 𝐎 𝐚𝐥𝐚𝐢𝐤𝐮𝐦\n\n✨💗🥀𝐉𝐮𝐦𝐦𝐚𝐡 𝐌𝐮𝐛𝐚𝐫𝐚𝐤🦋✨\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "😇𝑨𝑺𝑺𝑨𝑳𝑨𝑴𝑶𝑨𝑳𝑨𝑰𝑲𝑼𝑴😇✨\n\n1000 𝑷𝑹𝑶𝑩𝑳𝑬𝑴..!💔🥀\n\n𝑶𝑵𝑳𝒀 𝑶𝑵𝑬 𝑺𝑶𝑳𝑼𝑻𝑰𝑶𝑵 🫀👀\n\n𝑵𝑨𝑴𝑨𝒁 🫶\n\n✨🦋𝐉𝐮𝐦𝐦𝐚𝐡 𝐌𝐮𝐛𝐚𝐫𝐚🦋✨\n\n {name}\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "♥️🕋𝐀𝐬𝐬𝐚𝐥𝐚𝐦 𝐎 𝐚𝐥𝐚𝐢𝐤𝐮𝐦\n\n🕌𝑰𝑻𝑺 𝑭𝑹𝑰𝑫𝑨𝒀🕌\n\n𝑴𝒀 <𝑨𝑳𝑳𝑨𝑯> 𝑪𝑶𝑵𝑻𝑰𝑵𝑼𝑬 𝑻𝑶 𝑹𝑬𝑺𝑷𝑶𝑵𝑫 𝑻𝑶 𝑨𝑳𝑳 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑫𝑼𝑨 🤍✨\n\n\n\n آمین️🤲❤️\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    var name = await Users.getNameUser(event.senderID);

    if (event.body.toLowerCase().startsWith("Jumma Mubarak") || 
        event.body.toLowerCase().startsWith("jumma mubarak") || 
        event.body.toLowerCase().startsWith("friday")) { 

        // Select random GIF and message
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
        const downloadPath = path.join(__dirname, 'Miss-You-Sad-Gif-Images.gif');

        // Download image from Imgur
        request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: randomMessage,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("🕌", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
