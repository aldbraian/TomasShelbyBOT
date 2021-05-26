const { shootGameRandom } = require('../sort.js');

module.exports = {
	name: 'shoot',
	description: 'shoot someone',
	execute(message, args) {
		console.log(args);
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to shoot them');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You shot at ${taggedUser.username} and hit him/her in the ${shootGameRandom()}`);
	},
};