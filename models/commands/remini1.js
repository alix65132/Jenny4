const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "reminiv1",
  version: "1.0",
  hasPermission: 0,
  credits: "Prince Malhotra",
  description: "Enhancing your photo",
  commandCategory: "Media",
  usages: "[reply image]",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const pathie = './cache/enhanced.jpg';
  const { threadID, messageID } = event;

  const james = event.messageReply?.attachments?.[0]?.url || args.join(" ");

  if (!james || !james.startsWith('http')) {
    return api.sendMessage("❎ | Please reply to an image or provide a valid image URL.", threadID, messageID);
  }

  try {
    api.sendMessage("⏱️ | Your Photo is Enhancing. Please Wait....", threadID, messageID);

    const apiURL = `https://prince-malhotra-remini.vercel.app/enhance-image?url=${encodeURIComponent(james)}`;
    console.log("📡 | Sending request to API:", apiURL);

    const response = await axios.get(apiURL);

    if (!response.data || !response.data.image_data) {
      console.error("🚨 | API Response Error:", response.data);
      throw new Error("Invalid API response");
    }

    const processedImageURL = response.data.image_data;

    // Validate enhanced image URL
    if (!processedImageURL.startsWith('http')) {
      throw new Error("API returned an invalid image URL");
    }

    console.log("✅ | Enhanced Image URL:", processedImageURL);

    const imgResponse = await axios.get(processedImageURL, { responseType: "stream" });

    const writeStream = fs.createWriteStream(pathie);
    imgResponse.data.pipe(writeStream);

    writeStream.on('finish', () => {
      api.sendMessage({
        body: "🖼️ | Your Photo has been Enhanced!",
        attachment: fs.createReadStream(pathie)
      }, threadID, () => fs.unlinkSync(pathie), messageID);
    });

  } catch (error) {
    console.error("❌ | Image Enhancement Error:", error.message);
    api.sendMessage(`❎ | Error processing image: ${error.message}`, threadID, messageID);
  }
};
