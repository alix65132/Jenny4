const axios = require("axios");
const request = require("request");

module.exports.config = {
  name: "hercai",
  version: "1.6.1",
  hasPermission: 0,
  credits: "SHANKAR SIR",
  description: "AI बॉट जो हर यूजर की बातचीत को याद रखकर जवाब देगा",
  commandCategory: "AI",
  usages: "[बॉट के मैसेज पर रिप्लाई करें]",
  cooldowns: 5,
};

let userMemory = {};
let isActive = true;
let userLanguage = {};

// تائید شدہ زبانیں
const supportedLanguages = {
  bhojpuri: "bho", urdu: "ur", punjabi: "pa", nepali: "ne",
  english: "en", hindi: "hi", french: "fr", spanish: "es",
  russian: "ru", italian: "it", arabic: "ar", german: "de",
  portuguese: "pt", korean: "ko", bengali: "bn", marathi: "mr",
  maithili: "mai", tamil: "ta", gujrati: "gu", sanskrit: "sa"
};

// **ترجمہ فنکشن**
const translateText = async (text, targetLang) => {
  return new Promise((resolve, reject) => {
    request(
      encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`),
      (err, res, body) => {
        if (err) return reject("Translation failed.");
        try {
          const translated = JSON.parse(body);
          let translatedText = "";
          translated[0].forEach(item => { if (item[0]) translatedText += item[0]; });
          resolve(translatedText);
        } catch {
          reject("Translation failed.");
        }
      }
    );
  });
};

// **بوٹ کا مرکزی واقعہ**
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body, messageReply } = event;
  if (!isActive || !body) return;

  const lowerBody = body.toLowerCase();

  // **زبان کی ترتیبات**
  if (supportedLanguages[lowerBody]) {
    userLanguage[senderID] = supportedLanguages[lowerBody];
    return api.sendMessage(`✅ آپ کی زبان اب *${lowerBody}* مقرر کیا گیا ہے.`, threadID);
  }

  // **اگر صارف نے بوٹ کے پیغام کا جواب نہیں دیا، تو کچھ نہ کریں۔**
  if (!messageReply || messageReply.senderID !== api.getCurrentUserID()) return;

  const userQuery = body.trim();

  // **لوڈ صارف کی تاریخ**
  if (!userMemory[senderID]) userMemory[senderID] = [];

  // **صارف کے پچھلے تبادلوں کو شامل کریں۔**
  const conversationHistory = userMemory[senderID].join("\n");
  const fullQuery = conversationHistory + `\nUser: ${userQuery}\nBot:`;

  // **API کال کریں (اب پچھلی چیٹس بھی بھیج رہے ہیں۔)**
  const apiURL = `https://shankar-gpt-3-api.vercel.app/api?message=${encodeURIComponent(fullQuery)}`;

  try {
    const response = await axios.get(apiURL);
    let botReply = response.data.response || "مجھے سمجھنے میں دشواری ہو رہی ہے۔ کیا آپ اسے دہرا سکتے ہیں؟?";

    botReply = await translateText(botReply, userLanguage[senderID] || "hi");

    // **صارف کی تاریخ ذخیرہ کریں (اب 15 پیغامات تک))**
    userMemory[senderID].push(`User: ${userQuery}`);
    userMemory[senderID].push(`Bot: ${botReply}`);
    if (userMemory[senderID].length > 15) userMemory[senderID].splice(0, 2);

    return api.sendMessage({
      body: botReply,
      mentions: [{
        tag: "Bot",
        id: api.getCurrentUserID()
      }]
    }, threadID, messageID);
  } catch (error) {
    console.error("API Error:", error.message);
    return api.sendMessage("❌ AI سے جواب حاصل کرنے میں ایک مسئلہ تھا۔ براہ کرم بعد میں کوشش کریں۔", threadID, messageID);
  }
};

// **بوٹ کمانڈز**
module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const command = args[0] && args[0].toLowerCase();

  if (command === "on") {
    isActive = true;
    return api.sendMessage("✅ Hercai bot یہ اب فعال ہے۔", threadID, messageID);
  } else if (command === "off") {
    isActive = false;
    return api.sendMessage("⚠️ Hercai bot اب غیر فعال۔", threadID, messageID);
  } else if (command === "clear") {
    if (args[1] && args[1].toLowerCase() === "all") {
      userMemory = {};
      return api.sendMessage("🧹 تمام صارفین کی گفتگو کی سرگزشت صاف کر دی گئی ہے۔", threadID, messageID);
    }
    if (userMemory[senderID]) {
      delete userMemory[senderID];
      return api.sendMessage("🧹 آپ کی گفتگو کی سرگزشت صاف کر دی گئی ہے۔", threadID, messageID);
    } else {
      return api.sendMessage("⚠️ آپ کے پاس پہلے سے موجود کوئی تاریخ نہیں ہے۔", threadID, messageID);
    }
  }
};
