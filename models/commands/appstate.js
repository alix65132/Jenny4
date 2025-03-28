module.exports.config = {
  name: "appstate",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "uzairrajput",
  description: "refresh appstate.json",
  commandCategory: "Admin",
  usages: "appstate",
  cooldowns: 5,
  dependencies: {
  }
};

module.exports.run = async function ({ api, event, args }) {
  const fs = require("fs-extra");
  const permission = [`61552682190483`,`61552682190483`];
	if (!permission.includes(event.senderID)) return api.sendMessage("𝐘𝐨𝐮 𝐝𝐨𝐧'𝐭 𝐡𝐚𝐯𝐞 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐭𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝.\n𝐎𝐧𝐥𝐲 𝐌𝐫 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭.💚✨", event.threadID, event.messageID);
  let appstate = api.getAppState();
  // convert JSON object to a string
  const data = JSON.stringify(appstate);
  // write file to disk
  fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
    if (err) {
      return api.sendMessage(`Error writing file: ${err}`, event.threadID);
    } else {
      return api.sendMessage(`Refreshed appstate successfully`, event.threadID);
    }
  });

}
