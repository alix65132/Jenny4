module.exports.config = {
  name: "catfact",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Cat facts",
  usages: "[text]",
  commandCategory: "Fun",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://catfact.ninja/fact`);
var morse = res.data.fact;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}
