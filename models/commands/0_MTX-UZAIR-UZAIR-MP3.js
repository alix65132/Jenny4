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
				body: "◈━━━━━━━━━━━━━━━━💚✨\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒖𝒕..🥀✨💔",
				attachment: fs.createReadStream(__dirname + `/uzair/UZAIR.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
