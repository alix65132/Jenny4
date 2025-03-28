/*
 * @author Uzairrajput mtx
 * @warn Do not edit credit
 */

module.exports.config = {
  name: "bai",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Scratch card game for groups with betting\nMod by uzairmtx",
  commandCategory: "setting",
  usages: "[create/start/join/info/leave/check]",
  cooldowns: 5
};

module.exports.handleEvent = async ({ Currencies, event, api, Users }) => {
  const fs = require ("fs-extra");
  const { senderID, threadID, body, messageID } = event;
  if (typeof body == "undefined") return;
  if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
  if (!global.moduleData.baicao.has(threadID)) return;
  var values = global.moduleData.baicao.get(threadID);
  if (values.start != 1) return;

  const deckShuffel = values.deckShuffel;

  if (body.indexOf("chia bài") == 0) {
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
        body: `Your post: ${card1.Icon}${card1.Value} 丨 ${card2.Icon}${card2.Value} 丨 ${card3.Icon}${card3.Value} \n\n Your total post: ${tong}`,
        attachment: fs.createReadStream(pathSave)
      }, values.player[key].id, (error, info) => {
        if (error) return api.sendMessage(`Cannot deal cards to ${values.player[key].id}`, threadID);
        fs.unlinkSync(pathSave);
      });

    }
    values.chiabai = 1;
    global.moduleData.baicao.set(threadID, values);
    return api.sendMessage("The cards have been dealt successfully! Everyone has 2 turns to change cards. If you don't see your cards, check your waiting messages.", threadID);
  }

  if (body.indexOf("đổi bài") == 0) {
    if (values.chiabai != 1) return;
    var player = values.player.find(item => item.id == senderID);
    if (player.doibai == 0) return api.sendMessage("You have used all your turns to change cards.", threadID, messageID);
    if (player.ready == true) return api.sendMessage("You are ready, you cannot change the card!", threadID, messageID);
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
      body: `Your post after being changed: ${player.card1.Icon}${player.card1.Value} 丨 ${player.card2.Icon}${player.card2.Value} 丨 ${player.card3.Icon}${player.card3.Value}\n\n Your total post: ${player.total}`,
      attachment: fs.createReadStream(pathSave)
    }, player.id, (error, info) => {
      if (error) return api.sendMessage(`Cannot change post for ${player.id}`, threadID);
      fs.unlinkSync(pathSave);
    });
  }

  if (body.indexOf("ready") == 0) {
    if (values.chiabai != 1) return;
    var player = values.player.find(item => item.id == senderID);
    if (player.ready == true) return;
    const name = await Users.getNameUser(player.id);
    values.ready += 1;
    player.ready = true;
    if (values.player.length == values.ready) {
      const player = values.player;
      player.sort(function (a, b) { return b.total - a.total });

      var ranking = [], num = 1;

      for (const info of player) {
        const name = await Users.getNameUser(info.id);
        ranking.push(`${num++} • ${name}: ${info.card1.Icon}${info.card1.Value} 丨 ${info.card2.Icon}${info.card2.Value} 丨 ${info.card3.Icon}${info.card3.Value} => ${info.total} button\n`);
      }

      try {
        await Currencies.increaseMoney(player[0].id, values.rateBet * player.length);
      } catch (e) {};
      global.moduleData.baicao.delete(threadID);

      return api.sendMessage(`Result:\n\n ${ranking.join("\n")}\n\n The top player gets ${values.rateBet * player.length}$`, threadID);
    }
    else return api.sendMessage(`Players ${name} ready to turn the card, and ${values.player.length - values.ready} player has not shown card`, event.threadID);
  }

  if (body.indexOf("nonready") == 0) {
    const data = values.player.filter(item => item.ready == false);
    var msg = [];

    for (const info of data) {
      const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
      msg.push(name);
    }
    if (msg.length != 0) return api.sendMessage("Players who are not ready include: " + msg.join(", "), threadID);
    else return;
  }
}


module.exports.run = async ({ api, event, args, Currencies }) => {
  var { senderID, threadID, messageID } = event;
  if (args.length == 0) return api.sendMessage(`===== [ BAICAO ] =====\nEach player is dealt three cards. Players can view their cards privately or publicly and calculate their points. The player's score in each round is the odd number of the total points of the three cards. Winner takes all.\n\nInstructions for playing scratch cards:\n» create: to create a scratch card table\n» join: to join the scratch card table\n» start: to start\n  • Deal: to deal cards to players\n  • change cards: to change cards (each person has 2 turns)\n  • ready: to be ready\n» info: to view scratch card table information \n» check: Check player inbox status\n» leave: leave the table`, event.threadID, event.messageID);
  senderID = String(senderID);

  if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
  var values = global.moduleData.baicao.get(threadID) || {};
  var data = await Currencies.getData(event.senderID);
  var money = data.money     

  switch (args[0]) {
    case "create":
    case "-c": {
      if (global.moduleData.baicao.has(threadID)) return api.sendMessage("This group currently has a scratch card table open.", threadID, messageID);
      if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 1) return api.sendMessage("Your bet amount is not a number or your bet amount is less than $1", threadID, messageID);
      if (money < args[1]) return api.sendMessage(`You don't have enough money to be able to initialize the table at the price: ${args[1]}$`,event.threadID,event.messageID);
      await Currencies.decreaseMoney(event.senderID, Number(args[1]));
      global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ], rateBet: Number(args[1])});
      return api.sendMessage(`Your baccarat table has been successfully created. To join, enter 'baicao join'`, event.threadID, event.messageID);
    }

    case "join":
    case "-j": {
      if (!values) return api.sendMessage("There is no baccarat table yet, you can create one using 'baicao create'", threadID, messageID);
      if (values.start == 1) return api.sendMessage("The scratch card table has now started.", threadID, messageID);
      if (money < values.rateBet) return api.sendMessage(`You are not enough ${values.rateBet}$ to join this scratch card table`,event.threadID,event.messageID)
      if (values.player.find(item => item.id == senderID)) return api.sendMessage("You have joined this scratch card table!", threadID, messageID);
      values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
      await Currencies.decreaseMoney(event.senderID, values.rateBet);
      global.moduleData.baicao.set(threadID, values);
      return api.sendMessage("You have successfully joined.!", threadID, messageID);
    }

    case "leave":
    case "-l": {
      if (typeof values.player == "undefined") return api.sendMessage("There is no baccarat table yet, you can create one using 'baicao create'", threadID, messageID);
      if (!values.player.some(item => item.id == senderID)) return api.sendMessage("You have not participated in the scratch card table in this group!", threadID, messageID);
      if (values.start == 1) return api.sendMessage("The scratch card table has now started.", threadID, messageID);
      if (values.author == senderID) {
        global.moduleData.baicao.delete(threadID);
        api.sendMessage("The author has left the table, which means the table will be disbanded.!", threadID, messageID);
      }
      else {
        values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
        api.sendMessage("You have left this poker table!", threadID, messageID);
        global.moduleData.baicao.set(threadID, values);
      }
      return;
    }

    case 'check': {
      for (const key in values.player) {

      api.sendMessage(`Did you see this message??`, values.player[key].id, (error, info) => {
        if (error) return api.sendMessage(`Cannot message ${values.player[key].id}`, threadID);
      });
    }
    return api.sendMessage("Checking player inbox status", threadID);
  }

    case "start":
    case "-s": {
      if (!values) return api.sendMessage("There is no baccarat table yet, you can create one using 'baicao create'", threadID, messageID);
      if (values.author !== senderID) return api.sendMessage("You don't have to be the table owner to start.", threadID, messageID);
      if (values.player.length <= 1) return api.sendMessage("Currently your table has no players, you can invite them to join by asking other players to type 'baicao join'", threadID, messageID);
      if (values.start == 1) return api.sendMessage("The table is currently started by the table owner.", threadID, messageID);
      values.deckShuffel = createDeck();
      values.start = 1;
      return api.sendMessage("Your scratch card table is started", threadID, messageID);
    }

    case "info":
    case "-i": {
      if (typeof values.player == "undefined") return api.sendMessage("There is no baccarat table yet, you can create one using 'baicao create'", threadID, messageID);
      return api.sendMessage(
        "=== [ BAICAO ] ===" +
        "\n- Author Table: " + values.author +
        "\n- Total number of players: " + values.player.length + " People" +
        "\n- Bet level: " + values.rateBet + " dollar"
      , threadID, messageID);
    }

    default: {
      console.log("Uzair Rajput Mtx module.", "[ INFO ]")
      console.log("You can buy donate for me via \nvietcombank: 1020480044 \n momo: 0866578517")
    }
  }
}

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["spades", "clubs", "diamonds", "hearts"];
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
      Icon: suits[x] == "spades" ? "♠️"  : suits[x] == "clubs" ? "♣️" : suits[x] == "diamonds" ? "♦️" : suits[x] == "hearts" ? "♥️" : ""
    };
    deck.push(card);
  }
}

module.exports.onLoad = async () => {
  console.log("====== BAICAO LOADED SUCCESSFULLY ======");
  console.log("[ INFO ] » Uzair Rajput Mtx module");
  console.log("[ DONATE ] » You can donate to me to help me have more motivation to code");
  console.log("============ Vietcombank: 1020480044 - REASONS FOR CLEARANCE ============")
};

function createDeck() {
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
  return `https://raw.githubusercontent.com/MintDaL/card/main/cards/${Value == "J" ? "jack" : Value == "Q" ? "queen" : Value == "K" ? "king" : Value == "A" ? "ace" : Value}_of_${Suit}.png`;
}

async function drawCard(cards) {
  const a = require("canvas");
  const b = a.createCanvas(500 * cards.length, 726);
  const ctx = b.getContext("2d");
  let x = 0;
  for (const card of cards) {
    const loadImgCard = await a.loadImage(card);
    ctx.drawImage(loadImgCard, x, 0);
    x += 500;
  }
  return b.toBuffer();
}
