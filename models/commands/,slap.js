var mysterious = "uzairrajput";
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "slap",
  version: "3.0.0",
  hasPermssion: 0,
  credits: `${mysterious}`,
  description: "it's just imitated because the old slap doesn't work",
  commandCategory: "Fun",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [ "https://i.postimg.cc/1tByLBHM/anime-slap.gif", ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("𝐴𝑘 𝐵𝑎𝑛𝑑𝑒 𝐾𝑖 𝐼'𝑑 𝐾𝑜 𝑀𝑒𝑛𝑡𝑖𝑜𝑛 𝐾𝑎𝑟𝑒𝑛 𝐽𝑖𝑠 𝐾𝑒 𝑀𝑢ℎ 𝑃𝑒 𝐴𝑝 𝐶ℎ𝑎𝑚𝑎𝑡 𝑀𝑎𝑟𝑛𝑎 𝐶ℎ𝑎ℎ𝑡𝑒 𝐻𝑎𝑖𝑛.. 😹😹\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨", threadID, messageID);
   var callback = () => api.sendMessage({body:`𝑆𝑙𝑎𝑝𝑝𝑒𝑑 - ${tag} 🤧` + `\n\n 𝑆𝑜𝑟𝑟𝑦, 𝑀𝑢𝑗ℎ𝑒 𝐿𝑎𝑔𝑎 𝐾𝑒 𝑇𝑢𝑚𝑎ℎ𝑟𝑒 𝐵𝑎𝑑𝑠𝑢𝑟𝑎𝑡 𝐶ℎ𝑒ℎ𝑟𝑒 𝑃𝑒 𝑀𝑎𝑐ℎ𝑎𝑟 𝐵𝑒𝑡ℎ𝑎 𝐻𝑎𝑖.. 🙂`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/uzair/slap.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/uzair/slap.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/uzair/slap.gif")).on("close",() => callback());
}
