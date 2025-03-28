const fs = require("fs");
module.exports.config = {
        name: "hukka",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "hukka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("hukka")==0 || event.body.indexOf("Hukka")==0 || event.body.indexOf("HUKKA")==0 || event.body.indexOf("Hukkaa ")==0) {
                var msg = {
                                body: "𝐘𝐞 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐇𝐮𝐊𝐊𝐚\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
                                attachment: fs.createReadStream(__dirname + `/uzair/shesha.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💨", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
