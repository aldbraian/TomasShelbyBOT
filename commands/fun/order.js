module.exports = {
	name: 'order',
	description: 'do something by order of the peaky blinders ',
	args: true,
	usage: '<any order>',
	cooldown: 5,
	execute(message, args) {
		message.channel.send(`${args.join(' ')} BY ORDER OF THE PEAKY BLINDERS`);
	},
};