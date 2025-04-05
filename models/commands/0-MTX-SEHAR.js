module.exports.config = {
  name: "sehar",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "sehar",
  description: "Owner ke liye No Prefix ya Reaction se unsend, Users ke liye +unsend",
  commandCategory: "noprefix",
  usages: "Owner: Uzi ya react, Users: +unsend",
  cooldowns: 0
};

module.exports.languages = {
  "en": {
    "returnCant": "Kisi or ka msg me q unsend karo..?",
    "missingReply": "Reply karo us msg ko jise unsend karwana hai."
  }
};

const botOwnerID = ["61552682190483","100085739395197"]; // <-- Apna ID daal lena

module.exports.handleEvent = async function ({ api, event }) {
  const { body, senderID, messageReply, threadID, messageID, type, reaction, messageID: reactMessageID } = event;

  // Reaction se Delete (Owner ke liye)
  if (type === "message_reaction" && senderID === botOwnerID) {
    return api.unsendMessage(reactMessageID);
  }

  if (!body || !messageReply) return;

  const lowerBody = body.toLowerCase();

  // Owner ke liye "Sehar" ya "Uzi" likhne se delete
  if (senderID === botOwnerID && (lowerBody === "Sehar" || lowerBody === "Uzi")) {
    if (messageReply.senderID != api.getCurrentUserID()) return;
    return api.unsendMessage(messageReply.messageID);
  }

  // Users ke liye ".unsend" likhne se delete
  if (lowerBody === ".unsend") {
    if (messageReply.senderID != api.getCurrentUserID()) {
      return api.sendMessage(module.exports.languages["en"]["returnCant"], threadID, messageID);
    }
    return api.unsendMessage(messageReply.messageID);
  }
};

module.exports.run = function () {};
