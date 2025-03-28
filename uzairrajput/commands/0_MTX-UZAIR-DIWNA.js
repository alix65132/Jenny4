const fs = require("fs");
module.exports.config = {
	name: "diwana",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dewana")==0 || (event.body.indexOf("diwana")==0)) {
		var msg = {
				body: "𝐊𝐢𝐬 𝐐𝐚𝐝𝐚𝐫 𝐊𝐡𝐮𝐛𝐬𝐮𝐫𝐚𝐭 𝐇𝐨𝐭𝐢 𝐇𝐚𝐢 𝐖𝐨 𝐀𝐧𝐤𝐡𝐞𝐢𝐧 𝐉𝐨 𝐊𝐢𝐬𝐢 𝐊𝐢.𝐓𝐚𝐫𝐚𝐟 𝐏𝐢𝐲𝐚𝐫 𝐂 𝐔𝐭𝐡𝐞𝐧 𝐎𝐫 𝐀𝐡𝐭𝐚𝐫𝐚𝐦 𝐂 𝐉𝐡𝐮𝐤 𝐉𝐚𝐲𝐞.....🥀♥️\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/diwana.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🩷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
