const fs = require("fs");
module.exports.config = {
	name: "GOOD MORNING",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("GM")==0 || event.body.indexOf("Gm")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("GOOD MORNING")==0 || event.body.indexOf("Gud Morning")==0) {
		var msg = {
				body: "⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG 🌄,\n\n◈━━━━━━━━━━━━━━━━💚✨\n\nʜᴀᴠᴇ ᴀ ᴡᴏɴᴅᴇʀꜰᴜʟ ᴅᴀʏ✨\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/gudmorning.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
