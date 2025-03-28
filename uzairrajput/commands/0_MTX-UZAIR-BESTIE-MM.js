const fs = require("fs");
module.exports.config = {
	name: "mahi1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mahira")==0 || (event.body.indexOf("Mahira Khan")==0 || (event.body.indexOf("MAHIRA")==0 || (event.body.indexOf("@Mahira Khan ")==0)))) {
		var msg = {
				body: "◈ ──── 💚✨𝐇𝐄𝐑𝐄 𝐔𝐳𝐚𝐢𝐫-𝐌𝐓𝐗 💚✨ 𝐁𝐄𝐒𝐓𝐈𝐄 😍🙂\n\n𝐅𝐄𝐄𝐋 𝐓𝐇𝐈𝐒 𝐒𝐎𝐍𝐆 ❤️🎧\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/ma.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
