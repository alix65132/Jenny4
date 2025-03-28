module.exports.config = {
  name: "autobanuser",
  version: "1.0.0",
  hasPermssion: 0, 
  credits: "uzairrajput",
  description: "automatically ban users if spambots (random image)",
  commandCategory: "system",
  usages: "x",
  cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("spam cc", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
  const fs = require("fs-extra");
  const moment = require("moment-timezone");
  
  let { senderID, messageID, threadID } = event;
  const so_lan_spam = 12; // số lần spam, vượt quá sẽ bị ban
  const thoi_gian_spam = 10000; // 10000 millisecond (1 phút)
  const unbanAfter = 100000; // 100000 millisecond (10 phút) 
  const folderRandomImage = __dirname + "/cache/randomImgAutobanUser";
  const allImage = fs.readdirSync(folderRandomImage);
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  let dataUser = await Users.getData(senderID) || {};
  let data = dataUser.data || {};
  
  if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= so_lan_spam) {
      const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss");
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `𝐒𝐩𝐚𝐦 𝐛𝐨𝐭 ${so_lan_spam} 𝐓𝐢𝐦𝐞/${thoi_gian_spam/10000}𝐌𝐢𝐧𝐮𝐭𝐞𝐬`;
      data.autoban = {
        timeStart: Date.now(),
        unbanAfter
      };
      data.dateAdded = time;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage({
        body: senderID + " | " + dataUser.name + `\n 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐛𝐚𝐧𝐧𝐞𝐝 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐛𝐨𝐭𝐬=)) ${unbanAfter/10000}𝐦𝐢𝐧𝐮𝐭𝐞𝐬 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐫𝐞𝐚𝐬𝐨𝐧: 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 \n 𝐀𝐮𝐭𝐨 𝐛𝐚𝐧 𝐥𝐚𝐭𝐞𝐫  ${Math.floor(unbanAfter/10000)}𝐦𝐢𝐧𝐮𝐭𝐞\n𝐀𝐠𝐚𝐫 𝐛𝐨𝐭 𝐜 𝐮𝐧𝐛𝐚𝐧 𝐡𝐨𝐧𝐚 𝐜𝐡𝐚𝐡𝐭𝐞 𝐡𝐨 𝐭𝐰 𝐚𝐩 𝐦𝐞𝐫𝐞 𝐨𝐰𝐧𝐞𝐫 𝐮𝐳𝐚𝐢𝐫𝐦𝐭𝐱 𝐲𝐚 𝐛𝐨𝐭 𝐚𝐝𝐦𝐢𝐧 𝐤𝐨 𝐤𝐚𝐡𝐞 𝐮𝐧𝐛𝐚𝐧 𝐤𝐚𝐫𝐧𝐞 𝐤𝐞 𝐥𝐢𝐲𝐞\n.https://www.facebook.com/Mtxuzair`,
        attachment: fs.createReadStream(`${folderRandomImage}/${allImage[Math.floor(Math.random()*allImage.length)]}`)}, threadID, () => {
          setTimeout(async function() {
            delete data.autoban;
            data.banned = false;
            data.reason = null;
            data.dateAdded = null;
            await Users.setData(senderID, { data });
            global.data.userBanned.delete(senderID);
            console.log("𝐏𝐥𝐞𝐚𝐬𝐞 𝐔𝐧𝐛𝐚𝐧")
          }, unbanAfter);
        });
        for (let idAdmin of global.config.ADMINBOT) {
        api.sendMessage("👻 < 𝐁𝐨𝐭 > 𝐉𝐮𝐬𝐭 𝐁𝐚𝐧𝐧 " + senderID + " | " + dataUser.name + ` 𝐁𝐞𝐜𝐚𝐮𝐬𝐞 𝐢𝐭 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭𝐬 ${so_lan_spam} 𝐭𝐢𝐦𝐞/𝐦𝐢𝐧𝐮𝐭𝐞 \n 👻 𝐁𝐨𝐭 𝐰𝐢𝐥𝐥 𝐮𝐧𝐛𝐚𝐧 𝐢𝐭 𝐥𝐚𝐭𝐞𝐫 ${Math.floor(unbanAfter/10000)}𝐦𝐢𝐧𝐮𝐭𝐞𝐬\n𝐓𝐢𝐦𝐞: ` + time, idAdmin);
      };
    }
  }
};

//uZAIR Rajput all admin
// FIX ERROR
