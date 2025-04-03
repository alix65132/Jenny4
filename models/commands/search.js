module.exports.config = {
	name: "search",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput",
	description: "web search",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}search <text>\n\nExample:\n${global.config.PREFIX}search magnetic reversal\n`,
	commandCategory: "google",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let Uzairrajput = args.join(" ");
  if (!Uzairrajput) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}search <text>\n\nExample:\n${global.config.PREFIX}search magnetic reversal\n\nCreated by: Uzairrajput`, event.threadID, event.messageID);
const Uzairrajput = await google.search(`${Uzairrajput}`, {
  page: 0, 
  safe: false,
  parse_ads: false,
  additional_params: { 
    hl: 'en' 
  }
});
  console.log(Uzairrajputt);
  var Uzairrajput1 = Uzairrajputt.results[0];
  var Uzairrajput2 = Uzairrajput1.description;
api.sendMessage(Uzairrajput2, event.threadID, event.messageID);
  }
