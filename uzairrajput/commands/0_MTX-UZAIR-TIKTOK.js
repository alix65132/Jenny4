const axios = require("axios");
const fs = require("fs");
const { exec } = require("child_process");

module.exports.config = {
  name: "tiktok",
  credits: "uzairrajput",
  hasPermission: 0,
  description: "TikTok Download video from",
  usages: "[Keywords/Links]",
  commandCategory: "media",
  cooldowns: 5
};

module.exports.run = async ({ event, args, api }) => {
  try {
    if (args.length === 0) {
      return api.sendMessage("𝐉𝐨 𝐕𝐢𝐝𝐞𝐨 𝐂𝐡𝐚𝐡𝐢𝐲𝐞 𝐔𝐬𝐲 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐃𝐞 𝐊𝐞 𝐀𝐠𝐞 𝐕𝐢𝐝𝐞𝐨 𝐍𝐚𝐦𝐞 𝐥𝐢𝐤𝐡𝐞 𝐘𝐚 𝐏𝐡𝐢𝐫 𝐓𝐢𝐤𝐭𝐨𝐤 𝐕𝐢𝐝𝐞𝐨 𝐊𝐚 𝐔𝐫𝐥 𝐏𝐞𝐬𝐭 𝐊𝐚𝐫𝐞𝐧!", event.threadID, event.messageID);
    }

    let query = args.join(" ");
    let searchURL = `https://prince-sir-all-in-one-api.vercel.app/api/search/tiktoksearch?q=${encodeURIComponent(query)}`;

    let searchResponse = await axios.get(searchURL);
    if (!searchResponse.data.result || searchResponse.data.result.length === 0) {
      return api.sendMessage("𝐒𝐨𝐫𝐫𝐲 𝐌𝐮𝐣𝐡𝐞 𝐀𝐢𝐬𝐢 𝐊𝐢𝐨 𝐕𝐢𝐝𝐞𝐨𝐬 𝐍𝐡𝐢 𝐇𝐢 𝐍𝐚𝐡𝐢 𝐌𝐢𝐥𝐢..😕!", event.threadID, event.messageID);
    }

    let videoData = searchResponse.data.result[0]; // phle video search karen
    let videoURL = videoData.play; // without Watermark ke 
    let videoTitle = videoData.title || "TikTok Video";

    let filePath = `./tiktok_${event.senderID}.mp4`;
    let writer = fs.createWriteStream(filePath);

    let videoStream = await axios({
      url: videoURL,
      method: "GET",
      responseType: "stream"
    });

    videoStream.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage({
        body: `✨❁ ━━ ━[ 𝑼𝒛𝒂𝒊𝒓 ]━ ━━ ❁✨\n\n🎥 ${videoTitle}\n\n✨❁ ━━ ━[ 𝑴𝑻𝑿 💚✨ ]━ ━━ ❁✨`,
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
    });

  } catch (error) {
    console.error(error);
    api.sendMessage("⚠️ 𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞 𝐌𝐚𝐬𝐥𝐚 𝐀𝐫𝐚𝐡𝐚 𝐡𝐚𝐢..🥹🤟!", event.threadID, event.messageID);
  }
};
