const fs = require("fs");
module.exports.config = {
	name: "KISS-YOU",
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
	if(react.includes("KISS YOU") ||
     react.includes("Kiss you") || react.includes("kiss you") || react.includes("Kiss me") ||
react.includes("kiss me") ||
react.includes("Kiss me")) {
		var msg = {
				body: `🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,attachment: fs.createReadStream(__dirname + `/uzair/kiss.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
