module.exports.config = {
    name: "kickall",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "uzairrajput",
    description: "Remove all group members.",
    commandCategory: "Owner",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const permission = global.config.GOD;
  if (!permission.includes(event.senderID)) return api.sendMessage(`⚠️ Ruk ye command! Uzair Rajput Mtx Mahira Or Other Admin Use Kar sakte hai..🔪😾`, event.threadID, event.messageID);
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("» An error occurred.", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`» Need group admin rights.\nPlease add and try again.`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`» Start deleting all members. Goodbye everyone...`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage('» Only Bot Owner Mr Uzair Rajput Mtx Can Use This Command.', event.threadID, event.messageID);
  })
}
