const fs = require("fs");
module.exports.config = {
	name: "mtx",
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
	if (event.body.indexOf("Mtx")==0 || (event.body.indexOf("mtx")==0 || (event.body.indexOf("@mtx here 💚✨")==0 || (event.body.indexOf("@𝑴𝑻𝑿 💚✨ ")==0)))) {
		var msg = {
				body: "◈ ──── 💚✨𝐇𝐄𝐑𝐄 𝐔𝐳𝐚𝐢𝐫-𝐌𝐓𝐗 💚✨ 𝐁𝐎𝐒𝐒 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ❤️\n\n𝐵𝑎𝑎𝑑 𝑀𝑒 𝑅𝑜𝑙𝑎𝑛𝑒 𝐾𝑒 𝐿𝑖𝑦𝑒 \n𝑃𝑒ℎ𝑙𝑒 𝐾𝑖𝑡𝑛𝑎 𝐻𝑎𝑠𝑎𝑡𝑒 𝐻𝑒𝑛𝑎 𝐿𝑜𝐺?!💔🥺\n\n🔥🌼❤️‍🩹\n\n  𒆜⃝♥⃟  𝑀𝑡𝑥_𝑈𝑧𝑎𝑖𝑟♥⃟ \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/uz.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
