module.exports = {
	name: 'whore',
	description: 'Tomas Shelby Quote',
	execute(message, args) {
		console.log(args);
		message.channel.send('Everyone’s a whore, Grace. We just sell different parts of ourselves.');
	},
};