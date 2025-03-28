module.exports.config = {
  name: "Autobanbot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "uzairrajput",
  description: "ban bot",
  commandCategory: "...",
  cooldowns: 0
};
module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	const i = require("moment-timezone").tz("Asia/Karachi").format("HH:MM:ss L");
	if (s == t.getCurrentUserID()) return;
	let c = await n.getNameUser(o.senderID);
	var h = {
		body: `${c}\n𝐓𝐮𝐦 𝐁𝐨𝐭 𝐈𝐝 𝐇𝐨 𝐈𝐬 𝐋𝐢𝐲𝐞 𝐓𝐮𝐦𝐡𝐫𝐢 𝐒𝐩𝐚𝐦𝐦𝐢𝐧𝐠 𝐂 𝐛𝐚𝐜𝐡𝐧𝐞 𝐊𝐞 𝐋𝐢𝐲𝐞 𝐓𝐮𝐦𝐡𝐞. 𝐌𝐚𝐢𝐧𝐞 𝐁𝐚𝐧 𝐊𝐚𝐫 𝐃𝐢𝐲𝐚...`
	};
    //Add curse words without capital letters
	["Other Bot"].forEach((a => { 
		
        const s = o.senderID;
    let haha = o.body;
	if (haha.includes("your keyboard level has reached level") || haha.includes("Command not found") || haha.includes("The command you used") || haha.includes("Uy may lumipad") || haha.includes("Unsend this message") || haha.includes("You are unable to use bot") || haha.includes("»» NOTICE «« Update user nicknames") || haha.includes("just removed 1 Attachments") || haha.includes("message removedcontent") || haha.includes("The current preset is") || haha.includes("Here Is My Prefix") || haha.includes("just removed 1 attachment.") || haha.includes("Unable to re-add members")) {
			modules = "[ BOT BAN ]", console.log(c, modules, a);
			const o = n .getData(s).data || {};
			n.setData(s, {
				data: o
			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
				reason: o.reason,
				dateAdded: o.dateAdded
			}), t.sendMessage(h, e, (() => {
				const o = global.config.ADMINBOT;
				var n = o;
				for (var n of o) t.sendMessage(`Name: ${c}\nBot UID: ${s}\n\n𝐈𝐬 𝐈'𝐝 𝐊𝐨 𝐁𝐨𝐭 𝐌𝐞 𝐔𝐬𝐞 𝐊𝐚𝐫𝐭𝐞 𝐇𝐮𝐢 𝐌𝐢𝐥𝐢 𝐇𝐚𝐢 𝐋𝐞𝐡𝐚𝐳𝐚 𝐔𝐳𝐚𝐢𝐫-𝐌𝐭𝐱 𝐃𝐮𝐬𝐫𝐞 𝐁𝐨𝐭𝐬 𝐊𝐞 𝐒𝐩𝐚𝐦𝐦𝐢𝐧𝐠 𝐂 𝐁𝐚𝐜𝐡𝐧𝐞 𝐊𝐞 𝐋𝐢𝐲𝐞 𝐔𝐬 𝐁𝐨𝐭 𝐊𝐨 𝐊𝐚𝐫𝐝𝐞 𝐃𝐞...`, n)
			}))
		} 
	})) 
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("𝐘𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐃𝐮𝐬𝐫𝐞 𝐁𝐨𝐭𝐬 𝐊𝐚 𝐏𝐚𝐭𝐚 𝐋𝐚𝐠𝐚𝐧𝐞 𝐎𝐫 𝐒𝐩𝐚𝐦𝐢𝐧𝐠 𝐂 𝐁𝐚𝐜𝐡𝐧𝐞 𝐊𝐞 𝐋𝐢𝐲𝐞 𝐔𝐧 𝐁𝐨𝐭 𝐊𝐨 𝐅𝐨𝐫𝐚𝐧 𝐁𝐚𝐧 𝐊𝐚𝐫𝐧𝐞 𝐊𝐞 𝐋𝐢𝐲𝐞 𝐈𝐬𝐭𝐚𝐦𝐚𝐥 𝐇𝐨𝐭𝐢 𝐇𝐚𝐢", o.threadID);
