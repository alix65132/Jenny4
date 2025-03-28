const fs = require("fs");
module.exports.config = {
        name: "icecream",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Icecream",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Iceream")==0 || event.body.indexOf("Icecream")==0 || event.body.indexOf("icecream")==0 || event.body.indexOf("ICECEARM")==0) {
                var msg = {
                                body: "𝐘𝐄 𝐋𝐎.𝐁𝐀𝐁𝐘 𝐈𝐂𝐄𝐂𝐑𝐄𝐄𝐌\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
                                attachment: fs.createReadStream(__dirname + `/uzair/ice.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍦", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
