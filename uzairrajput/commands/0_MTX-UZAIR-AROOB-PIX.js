const fs = require("fs");
module.exports.config = {
	name: "arob1",
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
				body: "❤️🌸",
				attachment: fs.createReadStream(__dirname + `/uzair/aroob.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
