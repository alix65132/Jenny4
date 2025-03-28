/**
 * @author Uzair Rajput 
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "owner",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "info bot owner",
  usePrefix: true,
  commandCategory: "owner",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
          hours = Math.floor(time / (60 * 60)),
          minutes = Math.floor((time % (60 * 60)) / 60),
          seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
      "Đừng mong chờ gì từ MintBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MintBot là ví dụ.",
      "Mirai dropped.",
      "MintBot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "MintBot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.imgur.com/OkZKiCp.mp4",
    ];

    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Karachi").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++} ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++} ${name1} - ${idNDH} `);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `🌹 𝐇𝐄𝐑𝐄 𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 🌹
◈─────────────────🤍✨\n◈『 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨ 』◈\n\n𝐀𝐚𝐬𝐡𝐪 𝐒𝐞𝐞𝐧𝐞 𝐌𝐞 𝐔𝐭𝐚𝐫  𝐉𝐚𝐲𝐞𝐞𝐧 𝐓𝐰 𝐊𝐮𝐜𝐡 𝐊𝐡𝐨𝐨𝐟 𝐍𝐚𝐡𝐢 🔥🔥\n𝐃𝐢𝐥 𝐉𝐚𝐛 𝐀𝐧𝐤𝐡𝐨 𝐌𝐞 𝐃𝐡𝐚𝐫𝐚𝐤𝐭𝐚 𝐇𝐚𝐢 𝐓𝐰 𝐃𝐚𝐫 𝐋𝐚𝐠𝐭𝐚 𝐇𝐚𝐢 👁️‍🗨️👁️‍🗨️ \n◈ ──── 💚✨ 𝐔𝐙𝐀𝐈𝐑 𝐑𝐀𝐉𝐏𝐔𝐓 😇✨\n\n◈─────────────────🤍✨\n» Prefix system: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length} ◈─────────────────🤍✨\n ╭────────────╮\n🌻   𝐎𝐰𝐧𝐞𝐫 𝐔𝐳𝐚𝐢𝐫      🌻\n ╰────────────╯ ╭────────────╮\n💞       ( 𝐑𝐚𝐣𝐩𝐮𝐭 )       💞\n╰────────────╯\n🍇𝐀𝐝𝐦𝐢𝐧🍇\n◈─────────────────🤍✨\n\n♻️Facebook:-
https://www.facebook.com/Mtxuzair\n\n◈─────────────────🤍✨\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨ `, attachment: fs.createReadStream(__dirname + "/cache/15.mp4"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback()); 
  }
};
