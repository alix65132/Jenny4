const fs = require("fs");
module.exports.config = {
        name: "jalebi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "jalebi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("jalebi")==0 || event.body.indexOf("Jalebi")==0 || event.body.indexOf("JALEBI")==0 || event.body.indexOf("JABELI")==0) {
                var msg = {
                                body: "𝐘𝐄 𝐋𝐎.𝐁𝐀𝐁𝐘 𝐉𝐀𝐋𝐄𝐁𝐈.🥨\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
                                attachment: fs.createReadStream(__dirname + `/uzair/jalebi.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥨", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
