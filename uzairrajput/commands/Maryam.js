const fs = require("fs");
module.exports.config = {
	name: "maryam",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("maryam") ||
     react.includes("@MαɾYαɱ Hσɳ Yɯɾ😇✨") || react.includes("@𝑴𝒂𝒓𝒀𝒂𝒎>🐉") || react.includes("@⦕ɸ⃝̵⃝⟦⃢-⃢-⃢-⃢-⃢⟧⃢𝒜𝓃⃢𝑜⃢𝓃⃢𝓎⃢𝓂⃢𝑜⃢𝓊⃢𝓈⃢⟧ɸ⃝̵⃝⟦⃢") ||
react.includes("@▞▔▚░╮░░░░╭░▞▔▚ ▌░░▚╰╮🦋╭╯▞░░ ▐ ▌░◙░▚▘🔘▝▞░◙░▐ ▚░░░") ||
react.includes("MARYAM")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n◈ ──────────────── 💚✨\n\n
               ✦MαɾYαɱ Hσɳ Yɯɾ😇✨✦\n\n◈ ──────────────── 💚✨\n\n

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:
https://www.facebook.com/Missmaryam uid👉✨100010054632516✨\n\n◈ ──────────────── 💚✨\n\n



★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿✦`,attachment: fs.createReadStream(__dirname + `/uzair/maryam.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
