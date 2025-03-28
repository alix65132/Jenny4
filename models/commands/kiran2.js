const fs = require("fs");
module.exports.config = {
	name: "onfire",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Kìrâñ rajPööt") ||
     react.includes("kiran") || react.includes("KIRAN") || react.includes("KIRAN RAJPÖÖT") ||
react.includes("Kiran Rajpööt") ||
react.includes("kiran")) {
		var msg = {
				body: `★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿✦`,attachment: fs.createReadStream(__dirname + `/uzair/0.1.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
