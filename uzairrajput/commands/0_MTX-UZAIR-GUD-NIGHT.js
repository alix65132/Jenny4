const fs = require("fs");
module.exports.config = {
	name: "GOOD NIGHT",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("GN")==0 || event.body.indexOf("Gn")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("GOOD NIGHT")==0 || event.body.indexOf("Gud Night")==0) {
		var msg = {
				body: "😵‍💫 🌸=𝐆𝐎𝐎𝐃__𝐍𝐈𝐆𝐇𝐓___😘 𝐒𝐎𝐍𝐄 𝐒𝐄 𝐏𝐄𝐇𝐋𝐄 𝐌𝐄𝐑𝐀 𝐍𝐀𝐌𝐄 𝐋𝐄 𝐋𝐀𝐍𝐀 𝐁𝐇𝐎𝐎𝐓 𝐍𝐀𝐇𝐈 𝐀𝐘𝐄𝐆𝐀_____ 😂:))\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n⎯꯭֯🌸⃪𝐒𝐖𝐄𝐄𝐓 𝐃𝐑𝐄𝐀𝐌 😴😴,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/gn.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌆", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
