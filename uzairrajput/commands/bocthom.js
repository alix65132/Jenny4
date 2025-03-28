const fs = require("fs");
module.exports.config = {
    name: "boctham",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡uzairrajput", //Code working uzairmtx, trun mod 
    description: "game fun 𝟏𝟎𝐤 𝟐𝟎𝐤 𝟓𝟎𝐤 𝟏𝟎𝟎𝐤 𝟐𝟎𝟎𝐤 𝟓𝟎𝟎𝐤💎",
    commandCategory: "just fun",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 0 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi1.png")) request("https://i.imgur.com/luFyD1C.jpg").pipe(fs.createWriteStream(dirMaterial + "baolixi1.png"));
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins khi bốc thăm
var a = Math.floor(Math.random() * 8000) + 8000; //random coins khi bốc gói 10k
var b = Math.floor(Math.random() * 8000) + 50000; //random coins khi bốc gói 20k
var c = Math.floor(Math.random() * 80001) + 20000; //random coins khi bốc gói 50k
var d = Math.floor(Math.random() * 8000) + 98000; //random coins khi bốc gói 100k
var e = Math.floor(Math.random() * 8000) + 500000; //random coins khi bốc gói 200k
var f = Math.floor(Math.random() * 800001) + 200000; //random coins khi bốc gói 500k
//random số phần trăm may mắn của năm 2022
var g = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram1 = g[Math.floor(Math.random() * g.length)];   

var h = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram2 = h[Math.floor(Math.random() * h.length)]; 

var k = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram3 = k[Math.floor(Math.random() * k.length)];

var i = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram4 = i[Math.floor(Math.random() * i.length)];   

var t = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram5 = t[Math.floor(Math.random() * t.length)]; 

var v = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phamtram6 = v[Math.floor(Math.random() * v.length)]; 
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `⚡️𝑊𝑖𝑡ℎ 𝑡ℎ𝑒 10𝑘 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑡ℎ𝑒 𝑎𝑚𝑜𝑢𝑛𝑡 𝑜𝑓 𝑚𝑜𝑛𝑒𝑦   ${a}vnd 𝐴𝑛𝑑 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 2025 𝑖𝑠 : ${phantram1}`; Currencies.increaseMoney(event.senderID, a); break;            
                case "2": msg = `⚡️𝑊𝑖𝑡ℎ 𝑡ℎ𝑒 20𝑘 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑡ℎ𝑒 𝑎𝑚𝑜𝑢𝑛𝑡 𝑜𝑓 𝑚𝑜𝑛𝑒𝑦   ${b}vnd 𝐴𝑛𝑑 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 2025 𝑖𝑠 : ${phantram2}`; Currencies.increaseMoney(event.senderID, b); break;
                case "3": msg =`⚡️𝑊𝑖𝑡ℎ 𝑡ℎ𝑒 50𝑘 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑡ℎ𝑒 𝑎𝑚𝑜𝑢𝑛𝑡 𝑜𝑓 𝑚𝑜𝑛𝑒𝑦    ${c}vnd 𝐴𝑛𝑑 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 2025 𝑖𝑠 : ${phantram3}`; Currencies.increaseMoney(event.senderID, c); break;
                case "4": msg = `⚡️𝑊𝑖𝑡ℎ 𝑡ℎ𝑒 100𝑘 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑡ℎ𝑒 𝑎𝑚𝑜𝑢𝑛𝑡 𝑜𝑓 𝑚𝑜𝑛𝑒𝑦  ${d}vnd 𝐴𝑛𝑑 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 2025 𝑖𝑠 : ${phantram4}`; Currencies.increaseMoney(event.senderID, d); break;            
                case "5": msg =`⚡️𝑊𝑖𝑡ℎ 𝑡ℎ𝑒 200𝑘 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑡ℎ𝑒 𝑎𝑚𝑜𝑢𝑛𝑡 𝑜𝑓 𝑚𝑜𝑛𝑒𝑦   ${e}vnd 𝐴𝑛𝑑 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 2025 𝑖𝑠 : ${phantram5}`;Currencies.increaseMoney(event.senderID, e); break;
                case "6": msg = `⚡️𝑊𝑖𝑡ℎ 𝑡ℎ𝑒 500𝑘 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑡ℎ𝑒 𝑎𝑚𝑜𝑢𝑛𝑡 𝑜𝑓 𝑚𝑜𝑛𝑒𝑦  ${e}vnd 𝐴𝑛𝑑 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑓𝑜𝑟 2025 𝑖𝑠 : ${phantram5}`;Currencies.increaseMoney(event.senderID, g); break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("⚡️𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑎 𝑛𝑢𝑚𝑏𝑒𝑟.", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("⚡️𝑇ℎ𝑒 𝑐ℎ𝑜𝑖𝑐𝑒 𝑖𝑠 𝑛𝑜𝑡 𝑖𝑛 𝑡ℎ𝑒 𝑙𝑖𝑠𝑡.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️𝑆𝑜𝑢𝑟 𝑈𝑝𝑑𝑎𝑡𝑒...") {
                msg = "⚡️𝑈𝑝𝑑𝑎𝑡𝑒 𝑆𝑜𝑜𝑛...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`💎𝑌𝑜𝑢 ℎ𝑎𝑣𝑒 𝑟𝑒𝑐𝑒𝑖𝑣𝑒𝑑 𝑦𝑜𝑢𝑟 𝑙𝑜𝑡𝑡𝑒𝑟𝑦 𝑡𝑖𝑐𝑘𝑒𝑡, 𝑝𝑙𝑒𝑎𝑠𝑒 𝑐𝑜𝑚𝑒 𝑏𝑎𝑐𝑘 𝑡𝑜𝑚𝑜𝑟𝑟𝑜𝑤. 💴.\n🌸 𝑊𝑎𝑟𝑚 𝑇𝑒𝑡 𝑐𝑎𝑙𝑒𝑛𝑑𝑎𝑟 » ${d} 𝑑𝑎𝑦 ${h} ℎ𝑜𝑢𝑟 ${m} 𝑀𝑖𝑛𝑢𝑡𝑒`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋𝐷𝑟𝑎𝑤 𝑙𝑜𝑡𝑠 𝑎𝑛𝑑 𝑠𝑒𝑒 𝑦𝑜𝑢𝑟 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑜𝑓 𝑡ℎ𝑒 𝑦𝑒𝑎𝑟 2025🎋" +
                "\n𝟏.   𝑆𝑒𝑛𝑑 𝟏𝟎𝐤 💴 " +
                "\n𝟐.   𝑆𝑒𝑛𝑑 𝟐𝟎𝐤 💶 " +
                "\n𝟑.   𝑆𝑒𝑛𝑑 𝟓𝟎𝐤 💷 " +
                "\n𝟒.   𝑆𝑒𝑛𝑑 𝟏𝟎𝟎𝐤💸 " +
                "\n𝟓.   𝑆𝑒𝑛𝑑 𝟐𝟎𝟎𝐤💎 " +
                "\n𝟔.   𝑆𝑒𝑛𝑑 𝟓𝟎𝟎𝐤💵 " +
                `\n\n🧨𝑃𝑙𝑒𝑎𝑠𝑒 𝑟𝑒𝑝𝑙𝑦 𝑡𝑜 𝑡ℎ𝑒 𝑚𝑒𝑠𝑠𝑎𝑔𝑒 𝑡𝑜 𝑐ℎ𝑜𝑜𝑠𝑒 𝑡ℎ𝑒 𝑚𝑜𝑛𝑒𝑦 𝑝𝑎𝑐𝑘𝑎𝑔𝑒 𝑤𝑖𝑡ℎ 𝑡ℎ𝑒 𝑙𝑢𝑐𝑘𝑦 𝑝𝑒𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒 𝑜𝑓 2025 𝑡ℎ𝑎𝑡 𝑦𝑜𝑢 𝑤𝑎𝑛𝑡 𝑡𝑜 𝑑𝑟𝑎𝑤.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi1.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}
