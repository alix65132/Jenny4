//jis ne credit change kia uska id me hack karloga @uzairmtx
module.exports.config = {
  name: "bedi-pic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Randomimage",
  commandCategory: "Random Image",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["°𝑴𝑨𝑰𝑵𝑬 𝑻𝑼𝑴𝑯𝑬 𝑲𝑨𝑩𝑶𝑻𝑨𝑹 𝑲𝑬 𝒁𝑨𝑹𝒀𝑬 𝑨𝑲.𝑴𝑺𝑮 𝑩𝑯𝑬𝑱𝑨 𝑯𝑨𝑰 🕊️🤗\n\n𝑶𝑹 𝑻𝑼𝑴𝑵𝑬 𝑾𝑶.𝑲𝑨𝑩𝑶𝑻𝑨𝑹 𝑯𝑰.𝑩𝑬𝑨𝑪𝑯.𝑫𝑰𝒀𝑨 🥺🙂🤦‍♂️\n\n 𝑾𝑨𝑯.𝑮𝑨𝑹𝑬𝑬𝑩𝑶 𝑾𝑨𝑯 🐸😅°\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/ZR7k8wqx/1690049020031.jpg",
"https://i.postimg.cc/WbJRZ6c0/1692003896309.jpg",
"https://i.postimg.cc/MGqggCMY/1692779612779.jpg",
"https://i.postimg.cc/qv89bJRR/1692779620469.jpg",
"https://i.postimg.cc/y6G4WptV/1692779629437.jpg",
"https://i.postimg.cc/k5yP4J3Z/1692779643634.jpg",
"https://i.postimg.cc/bJNcS7qv/1692779654278.jpg",
"https://i.postimg.cc/g0pPmw58/1692779669693.jpg",
"https://i.postimg.cc/WbDVncgF/1692779675151.jpg",
"https://i.postimg.cc/5NZVKKSP/1692779679364.jpg",
"https://i.postimg.cc/3NVP6Wmy/1692779720149.jpg",
"https://i.postimg.cc/1XfkJDnh/1692779725973.jpg",
"https://i.postimg.cc/442ZVx7R/1692779776786.jpg",
"https://i.postimg.cc/KzJb9Z0L/1692779814180.jpg",




];
   var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
