const axios = require("axios");

const config = {
  name: "ai",
  version: "1.0.0",
  hasPermission: 0,
  credits: "uzairrajput",
  description: "[ Uzair Rajput Ai ]",
  commandCategory: "no prefix",
  usages: "𝘼𝙨𝙠 𝘼 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣 𝙁𝙧𝙤𝙢 𝘼𝙄",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("uzi") === 0 || event.body.indexOf("Uzi") === 0 || event.body.indexOf("Rajput") === 0 || event.body.indexOf("rajput") === 0) {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("✨ 𝐇𝐄𝐋𝐋𝐎 𝐈 𝐀𝐌 𝐔𝐙𝐀𝐈𝐑 𝐌𝐓𝐗 𝐀𝐈, 𝐓𝐘𝐏𝐄 ✍🏻 𝐑𝐀𝐉𝐏𝐔𝐓 𝐎𝐑 𝐀𝐏𝐍𝐄 𝐇𝐀𝐑 𝐒𝐀𝐖𝐀𝐋 𝐊𝐄 𝐉𝐀𝐖𝐀𝐁 𝐀𝐏 𝐌𝐔𝐉𝐇𝐒𝐄 𝐏𝐔𝐂𝐇 𝐒𝐀𝐊𝐓𝐄 𝐇𝐀𝐈𝐍.", threadID);
    } else {
      try {
        api.sendMessage("🫶🏻...", threadID);

        const text = message.slice(1).join(" "); // Join the remaining parts of the message
        const encodedText = encodeURIComponent(text);

        const ris = await axios.get(`https://api.dreaded.site/api/chatgpt?text=${encodedText}`);
        const resultai = ris.data.result.prompt;

        api.sendMessage(`◈━━━━━━━━━━━━ 💚✨\n\n\n${resultai}\n\n\n◈━━━━━━━━━━━━ 💚✨`, threadID);
      } catch (err) {
        console.error(err);
        api.sendMessage("❌ 𝙽𝚘 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚁𝚎𝚌𝚎𝚒𝚟𝚎𝚍 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚜𝚎𝚛𝚟𝚎𝚛: " + err + " 🥲", threadID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {
  // The run function is currently empty. You may add functionality here if needed.
};

module.exports = { config, handleEvent, run };
