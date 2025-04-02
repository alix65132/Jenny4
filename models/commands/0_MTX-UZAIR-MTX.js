const fs = require("fs");
module.exports.config = {
	name: "mtx",
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
	if (event.body.indexOf("Mtx")==0 || (event.body.indexOf("mtx")==0 || (event.body.indexOf("@mtx here 💚✨")==0 || (event.body.indexOf("@𝑴𝑻𝑿 💚✨ ")==0)))) {
		var msg = {
				body: "◈ ──── 💚✨𝐇𝐄𝐑𝐄 𝐔𝐳𝐚𝐢𝐫-𝐌𝐓𝐗 💚✨ 𝐁𝐎𝐒𝐒 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ❤️\n\nᴹᵃⁿᶻⁱˡᵉᵉⁱⁿ ᵍʰᵃᵇʳᵃᵗⁱ ʰᵃⁱⁿ ᵐᵘʲʰˢᵉ 🔥\nᴰⁱˡᵒ ᵏᵃ ᶜʰᵒʳ ⁿᵃʰⁱ ʰᵒ ᵐᵉ 👁️\nᴴᵃʳᵒⁿᵍᵃ ᵗʷ ᵏʰᵘᵈ ˢᵉ ʰᵃʳᵒⁿᵍᵃ 🔥\nᶻᵃᵐᵃⁿᵃ ʰᵃʳᵃ ᵈᵉ ⁱᵗⁿᵃ ᵏᵃᵐᶻᵒʳ ⁿᵃʰⁱ ʰᵘⁿ ᵐᵉ 👁️\n#ᵁᶻᵃⁱʳ 🎀",
				attachment: fs.createReadStream(__dirname + `/uzair/uz.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
