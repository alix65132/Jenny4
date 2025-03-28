const fs = require("fs");
module.exports.config = {
	name: "aroob",
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
	if (event.body.indexOf("@Aẳroob Here ")==0 || (event.body.indexOf("@🩷Evɘrɣʈhıƞg ıs ʈɘɱp❍rαrɣ🩶 ")==0 || (event.body.indexOf("Aaroob")==0 || (event.body.indexOf("Aroob")==0)))) {
		var msg = {
				body: "𝐌𝐄 𝐀𝐩𝐧𝐞 𝐃𝐚𝐦 𝐏𝐞 𝐇𝐢 𝐋𝐚𝐥𝐤𝐚𝐫𝐭𝐢 𝐇𝐨 𝐃𝐮𝐬𝐡𝐦𝐚𝐧 𝐊𝐨\n𝐌𝐮𝐣𝐡𝐞 𝐏𝐚𝐭𝐚 𝐇𝐚𝐢 𝐊𝐞 𝐌𝐞 𝐁𝐢𝐫𝐡 𝐌𝐞  𝐀𝐤𝐞𝐥𝐢 𝐇𝐨 𝐊𝐚𝐟𝐢 𝐇𝐨-🎀💥✌️\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒖𝒕..",
				attachment: fs.createReadStream(__dirname + `/uzair/aroob.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
