module.exports.config = {
  name: "sadvidos",
  version: "1.0.0",
  hasPermssi: 0,
  credits: "uzairrajput",
  description: "MADE BY UZAIR RAJPUT  MTX VEDIO",
  commandCategory: "SAD-VIDEO",
  usages: "sad video",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link =[
"https://i.imgur.com/9YNDljZ.mp4",
"https://i.imgur.com/OtaJiRF.mp4",
"https://i.imgur.com/YP1XmGl.mp4",
"https://i.imgur.com/XqRxy5d.mp4",
"https://i.imgur.com/a2ZVXLT.mp4",
"https://i.imgur.com/AKI3XJc.mp4",
"https://i.imgur.com/LvHlyl8.mp4",
"https://i.imgur.com/DBzfcpX.mp4",
"https://i.imgur.com/i7gdPAX.mp4",
"https://i.imgur.com/6U5NhYh.mp4",
"https://i.imgur.com/vMNZ1Ji.mp4",
"https://i.imgur.com/R9pKGWo.mp4",
"https://i.imgur.com/v2T105O.mp4",
"https://i.imgur.com/1jliKCa.mp4",
"https://i.imgur.com/S7S8qJG.mp4",
"https://i.imgur.com/LAaQIMa.mp4",
"https://i.imgur.com/nyZRVZJ.mp4",
"https://i.imgur.com/MdaGIML.mp4",
"https://i.imgur.com/9iAuWW0.mp4",
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
