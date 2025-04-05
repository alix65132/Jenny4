//Bacha Credit Hatane ke Bare me sochna Bhi nahi credit lock hai me jo chaho kar sakta hu..

module.exports.config = {
  name: "unsend",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Owner ke liye No Prefix ya Reaction se unsend, Users ke liye +unsend",
  commandCategory: "noprefix",
  usages: "Owner: unsend ya react, Users: +unsend",
  cooldowns: 0
};

module.exports.languages = {
  "en": {
    "returnCant": "Kisi or ka msg me Q unsend karo..?",
    "missingReply": "Reply karo us msg ko jise unsend karna hai."
  }
};

const botOwnerID = "61552682190483", "100085739395197"; // <-- Apna ID daal lena

module.exports.handleEvent = async function ({ api, event }) {
  const { body, senderID, messageReply, threadID, messageID, type, reaction, messageID: reactMessageID } = event;

  // Reaction se Delete (Owner ke liye)
  if (type === "😻" && senderID === botOwnerID) {
    return api.unsendMessage(reactMessageID);
  }

  if (!body || !messageReply) return;

  const lowerBody = body.toLowerCase();

  // Owner ke liye "Uzi" ya "Sehar" likhne se delete
  if (senderID === botOwnerID && (lowerBody === "Sehar" || lowerBody === "Uzi")) {
    if (messageReply.senderID != api.getCurrentUserID()) return;
    return api.unsendMessage(messageReply.messageID);
  }

  // Users ke liye "+unsend" likhne se delete
  if (lowerBody === "+unsend") {
    if (messageReply.senderID != api.getCurrentUserID()) {
      return api.sendMessage(module.exports.languages["en"]["returnCant"], threadID, messageID);
    }
    return api.unsendMessage(messageReply.messageID);
  }
};

module.exports.run = function () {};
