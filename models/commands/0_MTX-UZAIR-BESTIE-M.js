const fs = require("fs");
module.exports.config = {
	name: "mahi",
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
				body: "◈ ──── 💚✨𝐇𝐄𝐑𝐄 𝐔𝐳𝐚𝐢𝐫-𝐌𝐓𝐗 💚✨ 𝐁𝐄𝐒𝐓𝐈𝐄 😍🙂\n 𝐈𝐭𝐧𝐚 𝐓𝐞𝐫𝐢 𝐘𝐚𝐝𝐨𝐨𝐧 𝐂 𝐏𝐢𝐲𝐚𝐫 𝐐 𝐇𝐚𝐢 ❤️\n𝐃𝐢𝐥 𝐓𝐞𝐫𝐢 𝐂𝐡𝐚𝐡𝐚𝐭 𝐊𝐚 𝐓𝐚𝐥𝐚𝐛𝐠𝐚𝐫 𝐐 𝐇𝐚𝐢 🌸\n𝐌𝐞𝐫𝐢 𝐃𝐡𝐚𝐫𝐤𝐚𝐧𝐨 𝐊𝐨 𝐍𝐚 𝐉𝐚𝐧𝐞 𝐓𝐞𝐫𝐚 𝐈𝐧𝐭𝐞𝐳𝐚𝐫 𝐐 𝐇𝐚𝐢 💞\n𝐌𝐮𝐣𝐡𝐞 𝐁𝐭𝐚𝐨 𝐊𝐞 𝐓𝐮𝐦𝐬𝐞 𝐈𝐭𝐧𝐚 𝐏𝐢𝐲𝐚𝐫 𝐐 𝐇𝐚𝐢 🥰\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/mahira.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
