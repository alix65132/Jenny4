const fs = require("fs");
module.exports.config = {
	name: "daru",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "daru",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Daru")==0 || event.body.indexOf("daru")==0 || event.body.indexOf("Drink")==0 || event.body.indexOf("drink")==0) {
		var msg = {
				body: "◈ ──── 💚✨ 𝐀𝐉𝐀𝐎 𝐁𝐀𝐁𝐘 𝐃𝐎𝐍𝐎 𝐒𝐀𝐓 𝐌𝐄 𝐏𝐈𝐓𝐄 𝐇𝐀𝐈 🍻🍷🍺\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/daru.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
