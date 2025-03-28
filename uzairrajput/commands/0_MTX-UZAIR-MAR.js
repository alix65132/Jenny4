const fs = require("fs");
module.exports.config = {
	name: "mar",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "uzairrajput",
	description: "THIS BOT IS MR UZAIR RAJPUT MTX",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Marogi") ||
     react.includes("Maroga") || react.includes("marogi") || react.includes("maroga") ||
react.includes("chamat") ||
react.includes("Chamat")) {
		var msg = {
				body: `🩷 😡 𝐊𝐈𝐀 𝐁𝐎𝐋𝐀 𝐆𝐔𝐒𝐒𝐀 𝐃𝐈𝐊𝐇𝐀 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐄 😡 🩷\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,attachment: fs.createReadStream(__dirname + `/uzair/mar.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
