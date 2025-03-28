const fs = require("fs");
module.exports.config = {
        name: "khana-khao",
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
        if(react.includes("Dinner") ||
     react.includes("dinner") || react.includes("DINNER") || react.includes("KHANA") ||
react.includes("Kahna") ||
react.includes("khana")) {
                var msg = {
                                body: `𝐘𝐄.𝐋𝐎.𝐁𝐀𝐁𝐘 𝐊𝐇𝐀𝐍𝐀 🍲\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,attachment: fs.createReadStream(__dirname + `/uzair/kahna.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍽️", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
