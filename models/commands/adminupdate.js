module.exports.config = {
 name: "adminupdate",
 version: "1.0.0",
 credits: "uzairrajput",
 hasPermssion: 2,
 description: "\Toggle group information update messages",
 usages: "",
 commandCategory: "Admin",
 cooldowns: 0
};

module.exports.languages = {
  "vi": {"on": "Bật","off": "Tắt","successText": "thành công gửi tin nhắn cập nhật thông tin nhóm!",},
  "en": {"on": "on","off": "off","successText": "successfully sent group information update message!",}
}

module.exports.run = async({ api, event, Threads, getText }) => {
   let data = (await Threads.getData(event.threadID)).data || {};
   if (typeof data["adminUpdate"] == "undefined" || data["adminUpdate"] == false) data["adminUpdate"] = true;
   else data["adminUpdate"] = false;
   await Threads.setData(event.threadID, { data });
   global.data.threadData.set(parseInt(event.threadID), data);
   return api.sendMessage(`${(data["adminUpdate"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, event.threadID);
   }
