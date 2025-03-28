const fs = require("fs");
module.exports.config = {
        name: "angree",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "uzairrajput",
        description: "THIS BOT WAS MADE BY UZAIR RAJPUT MTX",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("angry") ||
     react.includes("ANGRY") || react.includes("Angry") || react.includes("Gussa") ||
react.includes("gussa") ||
react.includes("hyper")) {
                var msg = {
                                body: `𝐂𝐇𝐀𝐋 𝐃𝐎𝐑 𝐇𝐎 𝐉𝐀 𝐌𝐄𝐑𝐈 𝐍𝐀𝐙𝐑𝐎 𝐂\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,attachment: fs.createReadStream(__dirname + `/uzair/angry.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
