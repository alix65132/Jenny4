module.exports.config = {
    name: "game1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "3 card game for groups with bets (with pictures of cards)",
    commandCategory: "Game",
    usages: "[start/join/info/leave]",
    cooldowns: 1
};


const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["spades", "hearts", "diamonds", "clubs"];
const deck = [];

for (let i = 0 ; i < values.length; i++) {
  for (let x = 0; x < suits.length; x++) {
    let weight = parseInt(values[i]);
    if (["J", "Q", "K"].includes(values[i])) weight = 10;
    else if (values[i] == "A") weight = 11;
    const card = {
      Value: values[i],
      Suit: suits[x],
      Weight: weight,
      Icon: suits[x] == "spades" ? "♠️" : suits[x] == "hearts" ? "♥️" : suits[x] == "diamonds" ? "♦️" : "♣️"
        };
    deck.push(card);
  }
}

function createDeck() {
  // for 1000 turns
  // switch the values of two random cards
  const deckShuffel = [...deck];
  for (let i = 0; i < 1000; i++) {
    const location1 = Math.floor((Math.random() * deckShuffel.length));
    const location2 = Math.floor((Math.random() * deckShuffel.length));
    const tmp = deckShuffel[location1];
    deckShuffel[location1] = deckShuffel[location2];
    deckShuffel[location2] = tmp;
  }
  return deckShuffel;
}

function getLinkCard(Value, Suit) {
  return `https://raw.githubusercontent.com/ntkhang03/poker-cards/main/cards/${Value == "J" ? "jack" : Value == "Q" ? "queen" : Value == "K" ? "king" : Value == "A" ? "ace" : Value}_of_${Suit}.png`;
}

async function drawCard(cards) {
  // 500 x 726
  const Canvas = require("canvas");
    const canvas = Canvas.createCanvas(500*cards.length, 726);
  const ctx = canvas.getContext("2d");
  let x = 0;
  for (const card of cards) {
    const loadImgCard = await Canvas.loadImage(card);
    ctx.drawImage(loadImgCard, x, 0);
    x += 500;
  }
  return canvas.toBuffer();
}

module.exports.handleEvent = async ({ Currencies, event, api, Users }) => {
  const Canvas = require("canvas");
  const fs = require ("fs-extra");

    const { senderID, threadID, body, messageID } = event;

    if (typeof body == "undefined") return;
    if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
    if (!global.moduleData.baicao.has(threadID)) return;
    var values = global.moduleData.baicao.get(threadID);
    if (values.start != 1) return;

    const deckShuffel = values.deckShuffel; // Bộ bài

    if (body.indexOf("Deal the cards") == 0 || body.indexOf("Deal cards")   == 0) {
        if (values.chiabai == 1) return;
        for (const key in values.player) {
            const card1 = deckShuffel.shift();
            const card2 = deckShuffel.shift();
            const card3 = deckShuffel.shift();
            var tong = (card1.Weight + card2.Weight + card3.Weight);
            if (tong >= 20) tong -= 20;
            if (tong >= 10) tong -= 10;
            values.player[key].card1 = card1;
            values.player[key].card2 = card2;
            values.player[key].card3 = card3;
            values.player[key].tong = tong;

            const linkCards = [];

            for (let i = 1; i < 4; i++) {
              const Card = values.player[key]["card" + i];
              linkCards.push(getLinkCard(Card.Value, Card.Suit));
            }

            const pathSave = __dirname + `/cache/card${values.player[key].id}.png`;
            fs.writeFileSync(pathSave, await drawCard(linkCards));

            api.sendMessage({
              body: `Your Post: ${card1.Value}${card1.Icon} | ${card2.Value}${card2.Icon} | ${card3.Value}${card3.Icon} \n\n Your Total Post: ${tong}`,
              attachment: fs.createReadStream(pathSave)
            }, values.player[key].id, (error, info) => {
                if (error) return api.sendMessage(`Cannot Deal Cards to Players: ${values.player[key].id}`, threadID);
                fs.unlinkSync(pathSave);
            });

        }
        values.chiabai = 1;
        global.moduleData.baicao.set(threadID, values);
        return api.sendMessage("The Cards Have Been Dealt Equally To Everyone! There Are 2 Turns To Change Cards If You Haven't Seen Your Cards, Please Check Your Pending Messages Or Spam", threadID);
    }

    if (body.indexOf("Change post") == 0 || body.indexOf("change post")   == 0) {
        if (values.chiabai != 1) return;
        var player = values.player.find(item => item.id == senderID);
        if (player.doibai == 0) return api.sendMessage("You Have Used All Your Card Swaps", threadID, messageID);
        if (player.ready == true) return api.sendMessage("You're Ready, You Can't Change Your Card!", threadID, messageID);
        const card = ["card1","card2","card3"];
        player[card[(Math.floor(Math.random() * card.length))]] = deckShuffel.shift();
        player.tong = (player.card1.Weight + player.card2.Weight + player.card3.Weight);
        if (player.tong >= 20) player.tong -= 20;
        if (player.tong >= 10) player.tong -= 10;
        player.doibai -= 1;
        global.moduleData.baicao.set(values);

        const linkCards = [];

        for (let i = 1; i < 4; i++) {
          const Card = player["card" + i];
          linkCards.push(getLinkCard(Card.Value, Card.Suit));
        }

      const pathSave = __dirname + `/cache/card${player.id}.png`;
        fs.writeFileSync(pathSave, await drawCard(linkCards));

        return api.sendMessage({
          body: `Player's Card After Exchange: ${player.card1.Value}${player.card1.Icon} | ${player.card2.Value}${player.card2.Icon} | ${player.card3.Value}${player.card3.Icon}\n\n Your total post: ${player.tong}`,
          attachment: fs.createReadStream(pathSave)
    }, player.id, (error, info) => {
            if (error) return api.sendMessage(`Cannot Change Cards for Players: ${player.id}`, threadID);
            fs.unlinkSync(pathSave);
        });
    }

    if (body.indexOf("ready") == 0 || body.indexOf("Ready")   == 0) {
        if (values.chiabai != 1) return;
        var player = values.player.find(item => item.id == senderID);
        if (player.ready == true) return;
        const name = await Users.getNameUser(player.id);
        values.ready += 1;
        player.ready = true;
        if (values.player.length == values.ready) {
            const player = values.player;
            player.sort(function (a, b) { return b.tong - a.tong });

            var ranking = [], num = 1;

            for (const info of player) {
                const name = await Users.getNameUser(info.id);
                ranking.push(`${num++} • ${name} With ${info.card1.Value}${info.card1.Icon} | ${info.card2.Value}${info.card2.Icon} | ${info.card3.Value}${info.card3.Icon} => ${info.tong} button\n`);
            }

            try {
                await Currencies.increaseMoney(player[0].id, values.rateBet * player.length);
            } catch (e) {};
            global.moduleData.baicao.delete(threadID);

            return api.sendMessage(`Result:\n\n ${ranking.join("\n")}\n\n The First Place Player Receives The Corresponding Amount ${values.rateBet * player.length}$`, threadID);
        }
        else return api.sendMessage(`Players: ${name} Ready to Show, Remaining Players: ${values.player.length - values.ready} Not Shown Yet`, event.threadID);
    }

    if (body.indexOf("nonready") == 0 || body.indexOf("Nonready")   == 0) {
        const data = values.player.filter(item => item.ready == false);
        var msg = [];

        for (const info of data) {
            const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
            msg.push(name);
        }
        if (msg.length != 0) return api.sendMessage("Unready Players Include: " + msg.join(", "), threadID);
        else return;
    }
}

module.exports.run = async ({ api, event, args, Currencies }) => {
    var { senderID, threadID, messageID } = event;
 const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require("fs-extra");
  const request = require("request")
    threadID = String(threadID);
    senderID = String(senderID);
    if (!existsSync(__dirname + '/cache/3cay.png')) {
        request('https://i.imgur.com/MXk2py3').pipe(createWriteStream(__dirname + '/cache/3cay.png'));
      }
    if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
    var values = global.moduleData.baicao.get(threadID) || {};
  var data = await Currencies.getData(event.senderID);
  var money = data.money     
    if(!args[0]) {
var msg =  {body: `===== 3 Tree Table =====\nWelcome To Gambling Paradise Where You Can Double Your Wealth !\n To Participate You Need To Enter The Commands Below:\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»3cay create [ Bet Amount ]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»3cay start [Start 3 Card Table]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»3cay info [ View 3-Card Table Information ]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»3cay leave [ Leave the Table 3 Trees ]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»Dealing Cards [Only the Table Owner Can Give the Command to Deal Cards to Players]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»Exchange Cards [To Exchange Cards, Each Player Only Has 2 Turns to Exchange Cards Correspondingly]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»Ready [ Ready to Open card ]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨»Nonready [ See Those Who Are Not Ready ]\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨`, attachment : [
      createReadStream(__dirname + "/cache/3cay.png")
    ]}
     return api.sendMessage(msg, threadID, messageID)    }
     switch (args[0]) {
        case "create":
        case "-c": {
            if (global.moduleData.baicao.has(threadID)) return api.sendMessage("This Group Has Currently 3 Tree Table ", threadID, messageID);
            if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 1) return api.sendMessage("Your Bet Amount Is Not A Number Or Less Than $1", threadID, messageID);
      if (money < args[1]) return api.sendMessage(`You Don't Have Enough Money To Create This Table: ${args[1]}$`,event.threadID,event.messageID);
      await Currencies.decreaseMoney(event.senderID, Number(args[1]));
            global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ], rateBet: Number(args[1])});
            return api.sendMessage(`3 Card Table With Bet Amount ${args[1]}$ Created Successfully, Other Players Can Join To Play This Game\nCreator Does Not Need To Join Again\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨`, event.threadID, event.messageID);
        }

        case "join":
        case "-j": {
            if (!values) return api.sendMessage("There are currently no 3-Card Tables Created", threadID, messageID);
            if (values.start == 1) return api.sendMessage("The Game Has Now Begun", threadID, messageID);
            if (money < values.rateBet) return api.sendMessage(`You Do Not Have Enough Money To Play This Game: ${values.rateBet}$`,event.threadID,event.messageID)
            if (values.player.find(item => item.id == senderID)) return api.sendMessage("You Have Joined This Game !", threadID, messageID);
            values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
            await Currencies.decreaseMoney(event.senderID, values.rateBet);
            global.moduleData.baicao.set(threadID, values);
            return api.sendMessage("You Have Successfully Joined!", threadID, messageID);
        }

        case "leave":
        case "-l": {
            if (typeof values.player == "undefined") return api.sendMessage("There are currently no 3-Card Tables Created", threadID, messageID);
            if (!values.player.some(item => item.id == senderID)) return api.sendMessage("You have not joined the 3-Card Table in this group!", threadID, messageID);
            if (values.start == 1) return api.sendMessage("3 Card Table Has Now Started", threadID, messageID);
            if (values.author == senderID) {
                global.moduleData.baicao.delete(threadID);
                api.sendMessage("Author Leaves Table Means Table Is Closed!", threadID, messageID);
            }
            else {
                values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
                api.sendMessage("You Have Left This Table!", threadID, messageID);
                global.moduleData.baicao.set(threadID, values);
            }
            return;
        }

        case "start":
        case "-s": {
            if (!values) return api.sendMessage("There are currently no 3-Card Tables Created", threadID, messageID);
            if (values.author !== senderID) return api.sendMessage("You Are Not An Author So You Can't Start", threadID, messageID);
            if (values.player.length <= 1) return api.sendMessage("There is currently no one participating in this table.", threadID, messageID);
            if (values.start == 1) return api.sendMessage("Table Now Started By Author", threadID, messageID);
            values.deckShuffel = createDeck(); // Bộ bài
            values.start = 1;
            return api.sendMessage("The 3 Card Table Has Begun", threadID, messageID);
        }

        case "info":
        case "-i": {
            if (typeof values.player == "undefined") return api.sendMessage("There are currently no 3-Card Tables Created", threadID, messageID);
return api.sendMessage(
                "====  3 Tree Table ====" +
                "\n- Author Table: " + values.author +
                "\n- Total Number of Players: " + values.player.length + " People"
            , threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
  }
