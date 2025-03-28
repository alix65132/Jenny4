const fs = require("fs");
module.exports.config = {
	name: "mahira",
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
	if (event.body.indexOf("story")==0 || (event.body.indexOf("Mahira ki story")==0)) {
		var msg = {
				body: "𝑯𝑬𝑹𝑬 𝑴𝑨𝑯𝑰𝑹𝑨 𝑲𝑯𝑨𝑵 𝑺𝑻𝑶𝑹𝒀 🤍✨\n\n◈ ──────────────── 💚✨\n\n𝗖𝗿𝗲𝗱𝗶𝘁𝗲 :- 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿",
				attachment: fs.createReadStream(__dirname + `/uzair/mahira.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
