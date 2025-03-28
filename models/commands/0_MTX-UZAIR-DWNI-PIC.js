const fs = require("fs");
module.exports.config = {
  name: "dwipic",
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
  if (event.body.indexOf("Dewani")==0 || event.body.indexOf("diwani")==0 || event.body.indexOf("Diwani")==0 || event.body.indexOf("diwani")==0) {
    var msg = {
        body: `◈ ──── 💚✨ 𝐃𝐈𝐋 𝐌𝐄 𝐑𝐄𝐇𝐍𝐀 𝐒𝐈𝐊𝐇𝐈𝐘𝐄..............!!!❤️\n𝐀𝐓𝐓𝐈𝐓𝐔𝐃𝐄 𝐌𝐄 𝐓𝐖 𝐒𝐀𝐁 𝐑𝐄𝐇𝐍𝐓𝐄 𝐇𝐀𝐈...!!!💯⭐✨💥\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝐆 𝐁𝐎𝐋𝐄𝐍 𝐐 𝐘𝐀𝐃 𝐊𝐈𝐀 𝐌𝐔𝐉𝐇𝐄\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,
        attachment: fs.createReadStream(__dirname + `/uzair/uzairdiwani.jpeg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("☠️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
