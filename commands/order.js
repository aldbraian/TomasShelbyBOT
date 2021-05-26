module.exports = {
	name: 'order',
	description: 'do something by order of the peaky blinders ',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any order, ${message.author}!`);
		}
		message.channel.send(`${args.join(' ')} BY ORDER OF THE PEAKY BLINDERS`);
	},
};