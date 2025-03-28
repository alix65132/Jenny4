module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "uzairrajput",
    description: "Add user to group by link or uid",
    commandCategory: "Utilities",
    usages: "[args]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('𝐉𝐢𝐬 𝐢𝐝 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩! 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫𝐧𝐚 𝐡𝐚𝐢 𝐮𝐬𝐤𝐚 < 𝐔𝐫𝐥 > 𝐥𝐢𝐧𝐤 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐤𝐞 𝐬𝐚𝐭 𝐩𝐞𝐬𝐭 𝐤𝐑𝐨 𝐦𝐞 𝐮𝐬𝐤𝐨 𝐠𝐫𝐨𝐮𝐩! 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫𝐝𝐨𝐠𝐢..😾😛', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await api.getUID(args[0] || event.messageReply.body);
    var uidUser = res
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐘𝐞 𝐛𝐚𝐧𝐝𝐚 𝐩𝐡𝐥𝐞. 𝐡𝐢 𝐢𝐬 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐫𝐞𝐲 😹😹`, threadID, messageID);
    if (err) return api.sendMessage(`𝐌𝐞 𝐢𝐬 𝐢𝐝 𝐤𝐨 𝐚𝐝𝐝 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫 𝐬𝐚𝐤𝐭𝐢....😿😿`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`𝐌𝐢𝐚𝐧𝐞 𝐮𝐬𝐞𝐫 𝐤𝐨 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐡𝐚𝐢 𝐚𝐝𝐦𝐢𝐧 𝐚𝐩𝐫𝐨𝐯𝐚𝐥 𝐝𝐨...😾😾`, threadID, messageID);
    else return api.sendMessage(`𝐌𝐢𝐚𝐧𝐫 𝐮𝐬𝐞𝐫 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐡𝐚𝐢...😙🤟`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐘𝐞 𝐛𝐚𝐧𝐝𝐚 𝐩𝐡𝐥𝐞. 𝐡𝐢 𝐢𝐬 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐫𝐞𝐲 😹😹`, threadID, messageID);
    if (err) return api.sendMessage(`𝐌𝐞 𝐢𝐬 𝐢𝐝 𝐤𝐨 𝐚𝐝𝐝 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫 𝐬𝐚𝐤𝐭𝐢....😿😿`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`𝐌𝐢𝐚𝐧𝐞 𝐮𝐬𝐞𝐫 𝐤𝐨 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐡𝐚𝐢 𝐚𝐝𝐦𝐢𝐧 𝐚𝐩𝐫𝐨𝐯𝐚𝐥 𝐝𝐨...😾😾`, threadID, messageID);
    else return api.sendMessage(`𝐌𝐢𝐚𝐧𝐫 𝐮𝐬𝐞𝐫 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐡𝐚𝐢...😙🤟`, threadID, messageID);
    });
  }
      }
