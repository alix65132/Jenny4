const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "miss-you-too-sad",
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
    "https://i.imgur.com/ThUlrRv.gif",
    "https://i.imgur.com/2RpW0X4.gif",
    "https://i.imgur.com/xi8zL3Q.gif",
    "https://i.imgur.com/53bK6Xb.gif",
    "https://i.imgur.com/FmSAX0Z.gif",
    "https://i.imgur.com/69oq8rV.gif",
    "https://i.imgur.com/v8kAL42.gif",
    "https://i.imgur.com/lVgQHgN.gif",
    "https://i.imgur.com/1yYfb7d.gif",
];

const messages = [
    "𝑲𝑬 𝒀𝑬 𝑺𝑨𝑪𝑯  𝑯𝑨𝑰𝑰 𝑲𝑬  𝑼𝑺𝑲𝑬 𝑩𝑰𝑰𝑵𝑨 𝑫𝑰𝑳 𝑵𝑨𝑯𝑰 𝑳𝑨𝑮𝑻𝑨,  \n𝑲𝑬 𝒀𝑬 𝑺𝑨𝑪𝑯 𝑯𝑨𝑰  𝑼𝑺 𝑰𝑵𝑺𝑨𝑵 𝑲𝑬 𝑩𝑰𝑵𝑨 𝑫𝑰𝑳 𝑵𝑨𝑯𝑰 𝑳𝑨𝑮𝑻,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑬 𝑲𝑨𝑩𝑯𝑰 𝑲𝑨𝑩𝑯𝑰 𝑺𝑶𝑯𝑻𝑰 𝑲𝑬 𝑾𝑶 𝑰𝑵𝑺𝑨𝑵𝑬 𝑴𝑼𝑱𝑯𝑬 𝑵𝑨 𝑴𝑰𝑳𝑬 𝑻𝑾. 𝑴𝑬𝑹𝑰 𝒁𝑰𝑵𝑫𝑨𝑮𝑰 𝑲𝑨𝑺𝑬 𝑮𝑼𝒁𝑹𝑬𝑮𝑰. 😔\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "𝑲𝑨𝑩𝑯𝑰. 𝑲𝑨𝑩𝑯𝑰 𝑯𝑼𝑴 𝑲𝑰𝑺𝑰 𝑲𝑶 𝑰𝑻𝑵𝑨 𝑴𝑰𝑺𝑺 𝑲𝑨𝑹 𝑹𝑨𝑯𝑬 𝑯𝑶𝑻𝑬 𝑯𝑨𝑰\n\n◈━━━━━━━━━━━━━━━━💚✨, {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑲𝑬 𝑨𝑵𝑲𝑯𝑶𝑵 𝑪 𝑨𝑵𝑺𝑶𝑶 𝑨𝑷𝑵𝑬 𝑨𝑷 𝑵𝑰𝑲𝑨𝑳𝑵𝑬 𝑳𝑨𝑮𝑻𝑬 𝑯𝑨𝑰 𝑶𝑹 𝑫𝑰𝑳 𝑺𝑰𝑹𝑭 𝑼𝑵𝑺𝑬 𝑯𝑰 𝑩𝑨𝑻 𝑲𝑨𝑹𝑵𝑬 𝑲𝑶 𝑲𝑨𝑹𝑻𝑨 𝑯𝑨𝑰 💔\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n 𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼 🥺💯🥀𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼𝑹 𝑽𝑶𝑰𝑪𝑬, \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼𝑹 𝑺𝑴𝑰𝑳𝑬,  \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼𝑹. 𝑭𝑨𝑪𝑬,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼𝑹 𝑱𝑶𝑲𝑬, \n\n◈━━━━━━━━━━━━━━━━💚✨\n\𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼𝑹 𝑯𝑼𝑮, \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n{name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑰 𝑴𝑰𝑺𝑺. 𝒀𝑶𝑼𝑹. 𝑬𝑽𝑬𝑹𝒀𝑻𝑯𝑰𝑵𝑮😢 \n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "𝑰 𝑯𝑶𝑷𝑬 𝒀𝑶𝑼 𝑲𝑵𝑶𝑾 𝑻𝑯𝑨𝑻, 𝑰𝑴 𝑻𝑯𝑰𝑵𝑲𝑰𝑵𝑮 𝑨𝑩𝑶𝑼𝑻 𝒀𝑶𝑼,  \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n{name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼 😞,\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "𝑴𝑬𝑹𝑨 𝑫𝑰𝑳 𝑻𝑬𝑹𝑬 𝑩𝑰𝑵𝑨 𝑼𝑫𝑨𝑺 𝑯𝑨𝑰,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n {name},\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n 𝑴𝑬 𝑻𝑼𝑴𝑯𝑬 𝑩𝑯𝑶𝑻 𝒀𝑨𝑫 𝑲𝑨𝑹𝑻𝑰 𝑯𝑶𝑵  😔\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
    "𝑾𝑶𝑯 𝑳𝑨𝑴𝑯𝑬 𝑱𝑰𝑺. 𝑴𝑬 𝑻𝑼𝑴 𝑴𝑬𝑹𝑬 𝑺𝑨𝑻𝑯 𝑻𝑯𝑬, 𝑾𝑶𝑯 𝒀𝑨𝑫𝑬𝑬𝑰𝑵 𝑨𝑱  𝑩𝑯𝑰 𝑴𝑼𝑱𝑯𝑬 𝑩𝑯𝑶𝑻 𝑻𝑨𝑲𝑳𝑬𝑬𝑭 𝑫𝑬𝑻𝑰 𝑯𝑨𝑰𝑵,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n {name}। \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n 𝑴𝑰𝑺𝑺. 𝒀𝑶𝑼 💔 \n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    var name = await Users.getNameUser(event.senderID);

    if (event.body.toLowerCase().startsWith("Miss you") || 
        event.body.toLowerCase().startsWith("miss you") || 
        event.body.toLowerCase().startsWith("miss u")) { 

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
            api.setMessageReaction("💔", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
