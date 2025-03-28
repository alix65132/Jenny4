const fs = require("fs");
module.exports.config = {
	name: "ano",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL, Users }) {
	var { threadID, messageID } = event;
	var sticker = ["7703187359741114", "7035572376557422", "24803745895891694"
    ];
    var sticker1 = data[Math.floor(Math.random() * data.length)];
	if (event.body.indexOf("kaha ho")==0 || (event.body.indexOf("kab aoge")==0 || (event.body.indexOf("jaldi ao","Jaldi ana")==0 || (event.body.indexOf("Kaha ho?")==0)))) {
			api.sendMessage("𝐌𝐞 𝐀𝐣𝐚𝐨 𝐊𝐢𝐚 🙈🙈", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker1}, event.threadID);
      }, 100)
    }, event.messageID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
