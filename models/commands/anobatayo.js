const fs = require("fs");
module.exports.config = {
	name: "goodmorning",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Secret", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("SEX")==0 || (event.body.indexOf("sex")==0 || (event.body.indexOf("Sex")==0 || (event.body.indexOf("Sexy")==0)))) {
		var msg = {
				body: "What are we really?",
				attachment: fs.createReadStream(__dirname + `/uzair/anobatayo.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
