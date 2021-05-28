module.exports = {
	name: 'user-info',
	description: 'Info user',
	args: false,
	usage: '',
	cooldown: 10,
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};