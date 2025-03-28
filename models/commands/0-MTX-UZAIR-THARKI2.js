const fs = require("fs");
module.exports.config = {
        name: "ib",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "THIS BOT IS MR UZAIR RAJPUT",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("ib") ||
     react.includes("inbox") || react.includes("IB") || react.includes("IB AAWO") ||
react.includes("inbox aa") ||
react.includes("ib aa")) {
                var msg = {
                                body: ` 𝐊𝐈𝐓𝐍𝐄 𝐁𝐄𝐒𝐇𝐀𝐑𝐀𝐌 𝐇𝐎 𝐔𝐒𝐊𝐎 𝐈𝐁 𝐁𝐔𝐋𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎 😁😏 【 _𝐓𝐇𝐀𝐑𝐈_ 】𝐔𝐙𝐀𝐈𝐑 𝐒𝐀𝐇𝐈 𝐁𝐎𝐋 𝐓𝐇𝐀 𝐉𝐎 𝐈𝐁 𝐉𝐀𝐘𝐄 𝐆𝐀 𝐖𝐎 𝐓𝐇𝐀𝐑𝐊𝐈 𝐇𝐎𝐆𝐀 😏🥶`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
