module.exports = {
	name: 'prune',
	description: 'Prune messages',
	args: true,
	guildOnly: true,
	usage: '<number between 1 and 99>',
	cooldown: 4,
	execute(message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
		const amount = parseInt(args[0]) + 1;
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount < 2 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.log(err);
			if (err.code === 50013) {
				return message.channel.send('I can\'t prune messages because I don\'t have permissions');
			}
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	},
};