const fs = require("fs");
module.exports.config = {
	name: "ramdan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "naol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ramdan Mubarak")==0 || event.body.indexOf("ramdan mubarak")==0 || event.body.indexOf("Ramzan Mubarak")==0 || event.body.indexOf("RAMDAN MUBARAK")==0 || event.body.indexOf("ramzan mubarak")==0 || event.body.indexOf("RAMZAN MUBARAK")==0 || event.body.indexOf("SEHRI MUBARAK")==0 || event.body.indexOf("Sehri Mubarak")==0 || event.body.indexOf("sehri mubarak")==0 || event.body.indexOf("Chand Mubarak")==0 || event.body.indexOf("CHAND MUBARAK")==0 || event.body.indexOf("chand mubarak")==0) {
		var msg = {
				body: "𝐊𝐡𝐚𝐢𝐫 𝐌𝐮𝐛𝐚𝐫𝐚𝐤 𝐀𝐩𝐤𝐨 𝐁𝐡𝐢 𝐌𝐮𝐛𝐚𝐫𝐚𝐤 𝐇𝐨..❤️",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
