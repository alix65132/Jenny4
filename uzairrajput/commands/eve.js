module.exports.config = {
	name: "eve",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("good eve")==0 || event.body.indexOf("Good eve")==0 || event.body.indexOf("good Eve")==0 || event.body.indexOf("Good Eve")==0 || event.body.indexOf("eve")==0 || event.body.indexOf("Eve")==0 || event.body.indexOf("EVE")==0 || event.body.indexOf("EVENING")==0 || event.body.indexOf("GOOD EVENING")==0 || event.body.indexOf("GUD EVENING")==0 ) { 
		var msg = {
				body: `𝐕𝐞𝐫𝐲 𝐆𝐮𝐝 𝐄𝐯𝐞𝐧𝐢𝐧𝐠 ${name} 𝐁𝐚𝐛𝐲 ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
