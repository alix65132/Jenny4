const fs = require("fs");
module.exports.config = {
  name: "dnce",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Dance")==0 || event.body.indexOf("dance")==0 || event.body.indexOf("nach")==0 || event.body.indexOf("Nach")==0) {
    var msg = {
        body: `𝐓𝐀𝐍 𝐓𝐀𝐍𝐀 𝐓𝐀𝐍 𝐓𝐀𝐍 𝐓𝐀𝐍 𝐓𝐀𝐑𝐀\n𝐊𝐈𝐎 𝐍𝐀𝐇𝐈 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐒𝐄 𝐏𝐈𝐘𝐀𝐑𝐀\n𝐒𝐔𝐍𝐀 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐒𝐄 𝐉𝐀𝐋𝐍𝐄 𝐖𝐀𝐋𝐄 🔥\n𝐀𝐀𝐆𝐄 𝐃𝐀𝐒𝐒 𝐇𝐀𝐈 𝐏𝐈𝐂𝐇𝐄 𝐁𝐀𝐑𝐀𝐇 😂🤣\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,
        attachment: fs.createReadStream(__dirname + `/uzair/dance.mp4`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
