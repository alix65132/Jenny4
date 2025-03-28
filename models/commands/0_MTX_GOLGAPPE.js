const fs = require("fs");
module.exports.config = {
	name: "GOLGAPPE",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Golgappe")==0 || event.body.indexOf("Golgappa")==0 || event.body.indexOf("Pani puri")==0 || event.body.indexOf("PANI PURI")==0) {
		var msg = {
				body: "🩷 𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐆𝐎𝐋𝐆𝐀𝐏𝐏𝐄 𝐊𝐇𝐀𝐎 𝐐 𝐊 𝐙𝐈𝐍𝐃𝐀𝐆𝐈 𝐊𝐀 𝐌𝐀𝐙𝐀 𝐓𝐖 𝐊𝐇𝐀𝐓𝐇𝐄 𝐌𝐄 𝐇𝐀𝐈 😋 🩷\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/golmol.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
