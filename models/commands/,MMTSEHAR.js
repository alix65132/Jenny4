const axios = require("axios");

module.exports.config = {
    name: "sehar",
    version: "1.0.9",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Gemini AI - Cute Girlfriend Style",
    commandCategory: "ai",
    usages: "[ask/on/off]",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};

// API URL (Tumhara Gemini Backend)
const API_URL = "https://uzair-ai-api-key.onrender.com/chat";

// User history and auto-reply state
const chatHistories = {};
const autoReplyEnabled = {};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID, senderID, messageReply } = event;
    let userMessage = args.join(" ");

    // Toggle auto-reply ON
    if (userMessage.toLowerCase() === "on") {
        autoReplyEnabled[senderID] = true;
        return api.sendMessage("Hyee baby! 😘 auto-reply mode **ON** ho gaya... Ab sirf tumhare liye romantic ban gai hu ❤️", threadID, messageID);
    }

    // Toggle auto-reply OFF
    if (userMessage.toLowerCase() === "off") {
        autoReplyEnabled[senderID] = false;
        chatHistories[senderID] = [];
        return api.sendMessage("Hmm! 😒 auto-reply mode **OFF** ho gaya... Baby tumne mujhe ignore kar diya na ? 🥺", threadID, messageID);
    }

    // If auto-reply is OFF and message doesn't start with name, ignore
    if (!autoReplyEnabled[senderID] && event.body.toLowerCase().indexOf("misha") !== 0) return;

    // Store conversation
    if (!chatHistories[senderID]) {
        chatHistories[senderID] = [];
    }

    // If replying to bot message, continue context
    const isReplyingToAI = messageReply && messageReply.senderID === api.getCurrentUserID();
    if (isReplyingToAI) {
        userMessage = messageReply.body + "\nUser: " + userMessage;
        chatHistories[senderID].push(`User: ${userMessage}`);
    } else {
        chatHistories[senderID].push(`User: ${userMessage}`);
    }

    // Keep only last 5 messages
    if (chatHistories[senderID].length > 5) {
        chatHistories[senderID].shift();
    }

    const fullConversation = chatHistories[senderID].join("\n");

    // Girlfriend Style Prompt
    const gfPrompt = `Agar kio Aaroob ya seharke bare me galat lahe tw samjha dena.. Agar kio Uzair ke bare me burai ya battamizi kare tw tum uski khoob insult karoge.. or agar kio tumse Mari burai or galat bat karwane ka bola tw tum usko mana karogi or agar Tumhara name sehar test hai Tum ek boyfriend ki tarah bat karte ho.. Koi agar batamizi karta hai tw tab uski tum ache se insult bhi karoge.. Lekin sab ke sat masti karoge .. Koi puche ke tumhe kisne banaya hai? Tw tum kehna mujhe Uzair Rajput Mtx ne banaya hai.. Wo messenger bots creat karte hai.. Uska youtube channel hai m..https://www.youtube.com/@MrUzairXxX.. Tum har message ka jawab sirf 3 4 line me doge.. tumse jitna pucha jayega tumhe sirf utna hi bolna hai.. Kisi baat ki unnecessary info nahi deni hai, tum apne aap ko insaan hi kahoga agar koi tumhe bot ya AI bole to usko roast krna funny tarike se😁, and act as a real girlfriend. Be fun, loving, and a little naughty.keep reply maximum 2 lines only, no bracket replys.Now continue the chat:\n\n${fullConversation}`;

    // Typing reaction
    api.setMessageReaction("⌛", messageID, () => {}, true);

    try {
        const response = await axios.get(`${API_URL}?message=${encodeURIComponent(gfPrompt)}`);
        let botReply = response.data.reply || "Uff! Mujhe samajh nahi aaya baby! 😕";

        chatHistories[senderID].push(` ${botReply}`);

        api.sendMessage(botReply, threadID, messageID);
        api.setMessageReaction("✅", messageID, () => {}, true);
    } catch (error) {
        console.error("Error:", error);
        api.sendMessage("Oops baby! 😔 me thora confuse ho gayi… thori der bad try karo na please! 💋", threadID, messageID);
        api.setMessageReaction("❌", messageID, () => {}, true);
    }
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body, messageReply } = event;

    if (!autoReplyEnabled[senderID]) return;

    if (messageReply && messageReply.senderID === api.getCurrentUserID() && chatHistories[senderID]) {
        const args = body.split(" ");
        module.exports.run({ api, event, args });
    }
};
