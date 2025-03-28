const fs = require("fs");
module.exports.config = {
	name: "꯭𒄬•- † 𝐘̬̬̬̬̬̬̚͜Ꮗ'ɽ ⁽๏⁾𓆩𝐒ꪊ̄ӄ๏๏𝐍𓆪᭄ 𓐩𓐩⸙𓆥†⃝⃞1",
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
	if (event.body.indexOf("Uzair")==0 || (event.body.indexOf("@ ꯭𒄬•- † 𝐘̬̬̬̬̬̬̚͜Ꮗ'ɽ ⁽๏⁾𓆩𝐒ꪊ̄ӄ๏๏𝐍𓆪᭄ 𓐩𓐩⸙𓆥†⃝⃞ ")==0 || (event.body.indexOf("Admin")==0 || (event.body.indexOf("admin")==0)))) {
		var msg = {
				body: "◈ ──── 💚✨𝐵𝑟𝑜𝑘𝑒𝑛 𝑈𝑧𝑖𝑖 🤵😞💔\n\n𝙼𝚘𝚞𝚝 𝙲 𝚈𝚊𝚛𝚒 𝙽𝚊 𝚃𝚑𝚒. 𝙷𝚊𝚜𝚝𝚒 𝙲 𝙱𝚎𝚣𝚊𝚛𝚒 𝙽𝚊 𝚃𝚑𝚒...!\n\n𝚄𝚜 𝚂𝚊𝚏𝚊𝚛 𝙿𝚊𝚛 𝙲𝚑𝚊𝚕 𝙳𝚒𝚢𝚎 𝙷𝚞𝚖, 𝙹𝚒𝚜 𝙺𝚒 𝚃𝚊𝚢𝚊𝚛𝚒 𝙽𝚊 𝚃𝚑𝚒...!\n\n🔥🌼❤️‍🩹\n\n⤹  𝚠𝚛𝚒𝚝𝚎 𝚋𝚢\n\n\n𒆜⃝♥⃟ 𝙼𝚝𝚡 𝚞𝚣𝚊𝚒𝚛🪄_♥⃟\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒖𝒕..🥀✨💔",
				attachment: fs.createReadStream(__dirname + `/uzair/UZAIR.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
