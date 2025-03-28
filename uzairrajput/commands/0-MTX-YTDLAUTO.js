const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports.config = {
  name: "ytshorts",
  hasPermission: 0,
  version: "1.0.0",
  description: "Automatically download YouTube Shorts videos based on provided link",
  credits: "SHANKAR",
  commandCategory: "Utility"
};

module.exports.handleEvent = async function ({ api, event }) {
  const message = event.body;

  // Check if the message contains a YouTube Shorts link
  const youtubeShortsRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const match = message.match(youtubeShortsRegex);

  if (match) {
    const url = match[0];

    try {
      const findingMessage = await api.sendMessage(`⏳ | مختصر ویڈیو ڈاؤن لوڈ لنک حاصل کرنا...`, event.threadID);

      const apiUrl = `https://mr-prince-malhotra-ytdl.vercel.app/video?url=${encodeURIComponent(url)}`;
      const response = await axios.get(apiUrl);
      const responseData = response.data;

      if (!responseData.result || !responseData.result.url) {
        await api.sendMessage(`❌ | مختصر ویڈیو کے لیے کوئی ڈاؤن لوڈ لنک نہیں ملا۔`, event.threadID);
        return;
      }

      const downloadUrl = responseData.result.url;
      const title = responseData.result.title;
      const filePath = path.resolve(__dirname, "cache", `${Date.now()}-${title}.mp4`);

      const videoResponse = await axios.get(downloadUrl, {
        responseType: "stream",
        headers: { "User-Agent": "Mozilla/5.0" }
      });

      const fileStream = fs.createWriteStream(filePath);
      videoResponse.data.pipe(fileStream);

      fileStream.on("finish", async () => {
        const stats = fs.statSync(filePath);
        const fileSizeInMB = stats.size / (1024 * 1024);

        if (fileSizeInMB > 25) {
          await api.sendMessage(`❌ | "${title}" کا سائز ${fileSizeInMB.toFixed(2)}MB جو کہ 25MB سے زیادہ ہے۔\n📥 ڈاؤن لوڈ لنک: ${downloadUrl}`, event.threadID);
          fs.unlinkSync(filePath);
          return;
        }

        await api.sendMessage({
          body: `🎥 | آپ کی مختصر ویڈیو "${title}" اسے ڈاؤن لوڈ کر دیا گیا ہے!`,
          attachment: fs.createReadStream(filePath)
        }, event.threadID);

        fs.unlinkSync(filePath);
        api.unsendMessage(findingMessage.messageID);
      });

      videoResponse.data.on("error", async (error) => {
        console.error(error);
        await api.sendMessage(`❌ | مختصر ویڈیو ڈاؤن لوڈ کرنے میں ایک مسئلہ تھا۔: ${error.message}`, event.threadID);
        fs.unlinkSync(filePath);
      });

    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      await api.sendMessage(`❌ | مختصر ویڈیو حاصل کرنے میں ایک مسئلہ تھا۔: ${error.response ? error.response.data : error.message}`, event.threadID);
    }
  }
};

module.exports.run = async function ({ api, event, args }) {
  // This command does nothing as it only handles events
};
