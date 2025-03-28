const fs = require("fs");
module.exports.config = {
	name: "꯭𒄬•- † 𝐘̬̬̬̬̬̬̚͜Ꮗ'ɽ ⁽๏⁾𓆩𝐒ꪊ̄ӄ๏๏𝐍𓆪᭄ 𓐩𓐩⸙𓆥†⃝⃞",
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
				body: "◈ ──── 💚✨𝐇𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ❤️\n\n𝚔𝚊𝚜𝚑 𝙺𝚊𝚕 𝚂𝚞𝚋𝚑𝚊 𝚄𝚜 𝙺𝚎 𝙿𝚊𝚜𝚜 𝙺𝚑𝚊𝚋𝚊𝚛 𝙹𝚊𝚢𝚎 💔\n\n𝙺𝚎 𝚃𝚎𝚛𝚊 𝙻𝚒𝚢𝚎 𝚁𝚘𝚗𝚎 𝚆𝚊𝚕𝚊😭\n\n𝙻𝚊𝚛𝚔𝚊 𝙷𝚊𝚖𝚎𝚜𝚑𝚊 𝙺𝚎 𝙻𝚒𝚢𝚎 𝚂𝚘 𝙶𝚊𝚢𝚊💔😭🙏۔ ✍️\n\n🔥🌼❤️‍🩹\n\n⤹  𝚠𝚛𝚒𝚝𝚎 𝚋𝚢\n\n\n𒆜⃝♥⃟ 𝙼𝚝𝚡 𝚞𝚣𝚊𝚒𝚛🪄_♥⃟\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒖𝒕..🥀✨💔",
				attachment: fs.createReadStream(__dirname + `/uzair/Uzair.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
