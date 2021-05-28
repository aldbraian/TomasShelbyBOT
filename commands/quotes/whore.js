module.exports = {
	name: 'whore',
	description: 'Tomas Shelby Quote',
	args: false,
	usage: '',
	cooldown: 3,
	execute(message) {
		message.channel.send('Everyone’s a whore, Grace. We just sell different parts of ourselves.');
	},
};