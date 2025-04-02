const fs = require("fs");
module.exports.config = {
	name: "mt",
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
				body: "😎💨🎧",
				attachment: fs.createReadStream(__dirname + `/uzair/uz.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
