const fs = require("fs");
module.exports.config = {
        name: "by",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Bye",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("BYE")==0 || event.body.indexOf("bye")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("By")==0) {
                var msg = {
                                body: "🙋 𝐵𝐴𝑌𝐸 𝐵𝐴𝑌𝐸 𝐵𝐴𝐵𝑌 𝐽𝐴𝐿𝐷𝐼 𝐴𝑁𝐴 𝑀𝐼𝑆𝑆 𝑌𝑂𝑈 𝐵𝐻𝑂𝑇 𝑆𝐴𝑅𝐴 🙋\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨ ",
                                attachment: fs.createReadStream(__dirname + `/uzair/by.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
