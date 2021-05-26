module.exports = {
	name: 'user-info',
	description: 'Info user',
	execute(message, args) {
		console.log(args);
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};