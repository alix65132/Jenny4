const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "reminiv1",
  version: "1.0.",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Enhancing your photo",
  commandCategory: "Media",
  usages: "[reply image]",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const pathie = './cache/enhanced.jpg';
  const { threadID, messageID } = event;

  const james = event.messageReply?.attachments?.[0]?.url || args.join(" ");

  if (!james) return api.sendMessage("❎ | Please reply to an image or provide an image URL.", threadID, messageID);

  try {
    api.sendMessage("⏱️ | Your Photo is Enhancing. Please Wait....", threadID, messageID);

    const response = await axios.get(`https://prince-malhotra-remini.vercel.app/enhance-image?url=${encodeURIComponent(james)}`);
    
    // Check if the API response contains the enhanced image URL
    if (!response.data || !response.data.image_data) {
      throw new Error("Invalid API response");
    }

    const processedImageURL = response.data.image_data;
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
    api.sendMessage(`❎ | Error processing image: ${error.message}`, threadID, messageID);
  }
};
