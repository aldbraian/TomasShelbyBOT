module.exports = {
	name: 'avatar',
	description: 'Display avatar',
	args: false,
	usage: 'empty equals your user or you can write an <user/s>',
	cooldown: 5,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Do I look like a person that wants a simple life? ${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
		}
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ format: 'png', dynamic: true })}`;
		});
		message.channel.send(avatarList);
	},
};