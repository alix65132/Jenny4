const fs = require("fs");
module.exports.config = {
        name: "lolipop",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "lolopop",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("lolipop")==0 || event.body.indexOf("LOLIPOP")==0 || event.body.indexOf("Lolipop ")==0 || event.body.indexOf("lolipopp")==0) {
                var msg = {
                                body: "𝐘𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐋𝐎𝐋𝐈𝐏𝐎𝐏\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
                                attachment: fs.createReadStream(__dirname + `/uzair/lollipop.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍭", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
