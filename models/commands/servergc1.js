module.exports.config = {
	name: 'servergc1',
	version: '2.0.0',
	hasPermssion: 0,
	credits: 'uzairrajput',
	description: 'It will add you in uZ',
	commandCategory: 'random',
	usages: '[userID] or No prefix',
	cooldowns: 0
}; 
module.exports.run = async ({args, api, event, Users}) => {
	try {
		const id  = event.senderID;
		const id1 = args[0];
		const threadID = 6900379149973878;
		let name = await Users.getNameUser(event.senderID);
		let name1 = await Users.getNameUser(id1);
		if (!args[0]) {
			await api.addUserToGroup(id, threadID);
			let msg = {body: `[!] Your added to the MAIN GC..\nPlease Check your spam or message request.`}
			let msg1 = {body: `Hello ${name}, Welcome to our MAIN GC.`}
			let msg2 = {body: `[!] Alert ${name}\n\nHello ${name}, Please check your Spam/Message Request. Thank youu...`}
			api.sendMessage(msg, event.threadID, event.messageID);
			api.sendMessage(msg1, threadID);
			api.sendMessage(msg2, id);
		}
		const permission = [`61552682190483`,`61552682190483`];
		if (args[0] == id1) {
			if (!permission.includes(event.senderID)) return api.sendMessage("»» You don't have permission to use this command.\n"+global.config.OWNER+" only can use this command.uzair rajput", event.threadID, event.messageID);
			await api.addUserToGroup(id1, threadID);
			let msg = {body: `»» User: ${name} added ${name1} in Uzair Rajput `}
			let msg1 ={body: `[!] Alert ${name1}\n»» User: ${name} added you in Uzair Rajput.`}
			let msg2 = {body: `❯ Hello ${name1}, »»Welcome to Uzair Rajput.. `}
			api.sendMessage(msg, event.threadID, event.messageID);
			api.sendMessage(msg1, id1);
			api.sendMessage(msg2, threadID);
		}
		else return api.sendMessage("[!] An error occured!! Failed to add or your added already in group or the user you requested to add is already added in the group.", event.threadID, event.messageID);
		
	} catch (error) {
		api.sendMessage("Failed to add the user", event.messageID, event.threadID);
}
	
                             }