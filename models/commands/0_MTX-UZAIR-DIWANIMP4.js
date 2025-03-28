const fs = require("fs");
module.exports.config = {
  name: "dmp4",
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
        body: `𝐈'𝐌 𝐀𝐆𝐀𝐈 👿🔥\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,
        attachment: fs.createReadStream(__dirname + `/uzair/diwani.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("☠️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
