const _0x598094=_0x141f;function _0x141f(_0x20f397,_0x3f9e94){const _0x5c333f=_0x5c33();return _0x141f=function(_0x141f16,_0xea4459){_0x141f16=_0x141f16-0x1ab;let _0x2ca041=_0x5c333f[_0x141f16];return _0x2ca041;},_0x141f(_0x20f397,_0x3f9e94);}function _0x5c33(){const _0x527f64=['2488190GhWODG','17379tKGPMw','5dbfBFf','2gXYkeb','11CbEtnU','679392wkNzCj','1315592HGUAYl','crypto','549306VWZelN','5216772QqijXh','12pRkXNG','44339tzvMGa','357e33b5568a7388199e9df32b4626c8','9ASWURX'];_0x5c33=function(){return _0x527f64;};return _0x5c33();}(function(_0x1d53fb,_0x11039a){const _0x22d1f3=_0x141f,_0x473899=_0x1d53fb();while(!![]){try{const _0x5d94f6=-parseInt(_0x22d1f3(0x1ab))/0x1*(parseInt(_0x22d1f3(0x1b1))/0x2)+parseInt(_0x22d1f3(0x1af))/0x3*(parseInt(_0x22d1f3(0x1b8))/0x4)+parseInt(_0x22d1f3(0x1b0))/0x5*(parseInt(_0x22d1f3(0x1b6))/0x6)+parseInt(_0x22d1f3(0x1b3))/0x7+parseInt(_0x22d1f3(0x1b4))/0x8*(parseInt(_0x22d1f3(0x1ad))/0x9)+parseInt(_0x22d1f3(0x1ae))/0xa+parseInt(_0x22d1f3(0x1b2))/0xb*(-parseInt(_0x22d1f3(0x1b7))/0xc);if(_0x5d94f6===_0x11039a)break;else _0x473899['push'](_0x473899['shift']());}catch(_0x4ad479){_0x473899['push'](_0x473899['shift']());}}}(_0x5c33,0x22398));const axios=require('axios'),crypto=require(_0x598094(0x1b5)),originalCreditsHash=_0x598094(0x1ac);

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function calculateMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

const currentCreditsHash = calculateMD5(module.exports.config.credits);
if (currentCreditsHash !== originalCreditsHash) {
  console.error("Unauthorized credit modification detected!");
  throw new Error("The credits have been modified without authorization.");
}

const shayariList = [
"میری ساری خوشیاں تیرے بغیر ادھوری ہیں پھر سوچنا کہ تم میرے لیے کتنے اہم ہو", 
"میں کبھی نہیں کہہ سکتا کہ میں تم سے کتنی محبت کرتا ہوں، میں صرف اتنا جانتا ہوں کہ میں تمہارے بغیر نہیں رہ سکتا۔",
"میں تمہیں گلے لگا کر صرف یہ کہنا چاہتا ہوں، میں زندگی بھر تمہارے ساتھ رہنا چاہتا ہوں۔ !",
"میں تمہیں گلے لگا کر صرف یہ کہنا چاہتا ہوں، میں زندگی بھر تمہارے ساتھ رہنا چاہتا ہوں۔ !",
"ہم اس محبت کے رشتے کو پوری قوت سے قائم رکھیں گے اگر آپ ہمارا ساتھ دیں گے تو ہم غم کو بھی شکست دیں گے۔",
"دنیا کو خوشی کی ضرورت ہے، اور میں آپ کو ہر خوشی میں چاہتا ہوں۔",
"جب میں کچھ سوچتا ہوں، میں جب کچھ کہتا ہوں تو آپ کا نام آتا ہے۔",
"میں کب تک دل کو چھپا کر رکھوں تیری ہر حرکت سے",
"کچھ لوگ ہمیشہ دل میں رہتے ہیں جنہیں الفاظ میں بیان کرنے کی ضرورت نہیں ہوتی۔",
"ہم ہمیشہ اسی راستے پر چلتے ہیں جہاں بھیڑ نہیں ہوتی اپنی پہچان ہوتی ہے۔",
"یہ مت سمجھو کہ ہم تیرے لائق نہیں جو ہمیں حاصل کرنا چاہتا ہے ہم اسے حاصل نہیں کر سکتے۔",
"ہم آگ لگانا نہیں جانتے لیکن اگر ہماری سادگی کی وجہ سے لوگ جل جائیں تو اس میں ہمارا قصور نہیں۔",
"ہمیں اپنے نام کے لیے کسی کے سہارے کی ضرورت نہیں، ہماری شہرت آسمان کو چھوتی ہے۔",
"تم سے ہر ملاقات ادھوری لگتی ہے، کاش یہ لمحے ختم نہ ہوں۔",
"میں بلا وجہ مسکراتا ہوں، اور اپنے آدھے دشمنوں کو اسی طرح شکست دیتا ہوں۔",
];
const imgLinks = [
"https://i.imgur.com/Oy2gmom.jpeg",
"https://i.imgur.com/97cUzuB.jpeg",
"https://i.imgur.com/a7QnA90.jpeg",
"https://i.imgur.com/Qmym9Ya.jpeg",
"https://i.imgur.com/to4VDGN.jpeg",
"https://i.imgur.com/UgS5mT5.jpeg",
"https://i.imgur.com/JX5QX6y.jpeg",
"https://i.imgur.com/im2BS78.jpeg",
"https://i.imgur.com/QdXewG9.jpeg",
"https://i.imgur.com/seilMQR.jpeg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `◈━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━◈\n\n` +
      `✰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰ 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰ 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `◈━━━💚✨ 𝑼𝒛𝒂𝒊𝒓-𝑴𝑻𝑿 ◈━━━💚✨`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};
