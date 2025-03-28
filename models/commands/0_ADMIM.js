module.exports.config = {
  name: "goiadmin2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552682190483") {
    var aid = ["61552682190483"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗕𝗢𝗦𝗦 𝗕𝗨𝗦𝗬 𝗛𝗔𝗜𝗡🙁", "𝗕𝗮𝗯𝗬 𝗠𝗲𝗿𝘆 𝗢𝘄𝗻𝗲𝗿 𝗸𝗼 𝗥𝗲𝘀𝘁 𝗞𝗿𝗻𝘆 𝗗𝗼 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 𝗻𝗶 𝗞𝗿𝗼😐😒", "𝗬𝘄𝗿 𝗘𝗸 𝗕𝗮𝗿𝗿 𝗞𝗲𝗵 𝘁𝘂 𝗱𝗶𝗬𝗮 𝗵𝗮𝗶 𝗠𝘂𝗷𝗛𝘆 𝗯𝘁𝗮𝗼 𝗞𝗬𝗮 𝗸𝗮𝗮𝗺 𝗛𝗮𝗶🤧😣", "𝐔𝐙𝐀𝐈𝐑-𝐌𝐓𝐗 💚✨ 𝐁𝐎𝐒𝐒 𝐀𝐁𝐈 𝐂𝐎𝐃𝐈𝐍𝐆 𝐊𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐀𝐈 𝐔𝐍𝐇𝐄 𝐓𝐀𝐍𝐆 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 𝐖𝐀𝐑𝐍𝐀 𝐌𝐔𝐉𝐇𝐄 𝐆𝐔𝐒𝐒𝐀 𝐀𝐉𝐘𝐆𝐀 😡😡 ", "𝐊𝐈𝐀 𝐊𝐀𝐌 𝐇𝐀𝐈 𝐀𝐏𝐊𝐎 < 𝐔𝐙𝐀𝐈𝐑-𝐌𝐓𝐗 > 𝐂  𝐔𝐍𝐇𝐄 𝐍𝐀𝐇𝐈 𝐁𝐎𝐋𝐀𝐎", "𝐔𝐙𝐀𝐈𝐑-𝐌𝐓𝐗 𝐒𝐎𝐘𝐄 𝐇𝐔𝐄 𝐇𝐀𝐈𝐍 𝐓𝐌 𝐁𝐀𝐑 𝐁𝐀𝐑 𝐅𝐀𝐙𝐎𝐋 𝐌𝐄 𝐔𝐍𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑𝐎", " 𝐌𝐔𝐉𝐇𝐄 𝐁𝐓𝐀𝐎 𝐊𝐈𝐀 𝐇𝐔𝐀 𝐐 𝐁𝐎𝐋𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐄𝐑𝐄 𝐎𝐖𝐍𝐄𝐑 𝐊𝐎"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}