const fs = require("fs");
module.exports.config = {
        name: "Coffee",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Coffee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Coffee")==0 || event.body.indexOf("coffee")==0 || event.body.indexOf("COFFEE ")==0 || event.body.indexOf("cofi")==0) {
                var msg = {
                                body: "𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐎𝐅𝐅𝐄𝐄 𝐀𝐑𝐀𝐌 𝐂 𝐏𝐈𝐍𝐀 𝐆𝐀𝐑𝐀𝐌 𝐇𝐀𝐈\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
                                attachment: fs.createReadStream(__dirname + `/uzair/coffee.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
