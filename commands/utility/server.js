module.exports = {
	name: 'server',
	description: 'Info server',
	args: false,
	guildOnly: true,
	usage: '',
	cooldown: 10,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated At: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
	},
};