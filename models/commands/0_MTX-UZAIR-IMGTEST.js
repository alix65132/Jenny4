module.exports.config = {
  name: "pix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Your Name",
  description: "Fetch images from Pinterest based on keywords",
  commandCategory: "utility",
  usages: "pinterest <keyword>",
  dependencies: {
    "axios": "",
    "fs-extra": ""
  },
  cooldowns: 5
}

module.exports.run = async function ({ args, api, event }) {
  const axios = require('axios');
  const fs = require('fs-extra');
  const keyword = args.join(" ");
  const url = `https://shankar-sir-api.onrender.com/api/pinterest?text=${encodeURIComponent(keyword)}`;
  
  try {
    const response = await axios.get(url);
    const images = response.data.result; // Access the 'result' array from the response

    if (!Array.isArray(images)) {
      const errorMessage = `Error: Expected an array of images but received ${typeof images}`;
      console.error(errorMessage);
      return api.sendMessage(errorMessage, event.threadID, event.messageID);
    }

    if (images.length === 0) {
      const errorMessage = `No images found for keyword: ${keyword}`;
      console.error(errorMessage);
      return api.sendMessage(errorMessage, event.threadID, event.messageID);
    }

    const imagePromises = images.slice(0, 4).map(async (imageUrl, index) => {
      const imagePath = `${__dirname}/cache/${keyword}_${index}.jpg`;
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, 'utf-8'));
      return imagePath;
    });

    const imagePaths = await Promise.all(imagePromises);

    const attachments = imagePaths.map(path => fs.createReadStream(path));
    
    api.sendMessage({
      body: `Here are some images for keyword: ${keyword}`,
      attachment: attachments
    }, event.threadID, () => {
      imagePaths.forEach(path => fs.unlinkSync(path));
    }, event.messageID);
  } catch (error) {
    console.error(error);
    return api.sendMessage(`An error occurred while fetching images: ${error.message}`, event.threadID, event.messageID);
  }
};
