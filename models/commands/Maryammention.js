module.exports.config = {
  name: "mentionot",
  version: "1.0.0-beta-uzairrajput",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100010054632516") {
    var aid = ["100010054632516"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["meRi owner ko q Mention Kar Rahe Ho 🙄🙄🙄" , "𝐃𝐎𝐎𝐑 𝐑𝐀𝐇𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐒𝐄  𝐔𝐒𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑𝐎😏😏😏" , "𝐔𝐅𝐅 𝐍𝐀 𝐊𝐀𝐑𝐎 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐌𝐔𝐉𝐇𝐄 𝐒𝐇𝐀𝐑𝐀𝐌 𝐀𝐀𝐓𝐈 𝐇𝐀𝐈🙈🙈" , "Me Jaanu Ke Sath Busy hu , Mujhe q bula rahe ho" , "Abe wo owner g hai tameez c mention mat kar" , "Dimag Mat khao" , "Kia hua janu mujhe bulaya🙂" , "Koi kaam nhi hai kia tujhe" , "wo teri tarha vali nhi" , "Meri yaad arahi tumhe itni" , "meri jan hai 😙" , "Kiran ko mat bulya kro🙄" , "Tera sar torh dugi 😾😾, bar bar mention mat kRo😒" , "meRi Ek Bar ki kahi hui bat samjh me nhi ati kia tujhe, meRi owner ko bar bar mention q kar rahe ho 😒😒😒😒" , "Abee jaa na 😒" , "Mujhe Bulaya 😘 kia" , "dimagh Kharab ho jaye ga meRa maa behen pe ajongi me😁😁😁👈"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
