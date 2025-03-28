const fs = require("fs");
module.exports.config = {
	name: "nikal",
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
	if (event.body.indexOf(". kick")==0 || (event.body.indexOf(".kick")==0)){
		var msg = {
				body: "𝐂𝐇𝐀𝐋 𝐍𝐈𝐊𝐀𝐋 𝐓𝐔 𝐘𝐀𝐇𝐀 𝐂 𝐀𝐁 𝐃𝐄𝐊𝐇𝐍𝐀 𝐍𝐇𝐈 𝐃𝐎𝐁𝐀𝐑𝐀 𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄.𝐖𝐀𝐑𝐍𝐀 𝐇𝐀𝐃𝐃𝐈 𝐓𝐎𝐑𝐇 𝐏𝐀𝐒𝐋𝐈 𝐓𝐎𝐑𝐇 𝐃𝐔𝐆𝐈 𝐓𝐄𝐑𝐈 😾🔪\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/nikal.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
