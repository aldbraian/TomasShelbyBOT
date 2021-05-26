module.exports = {
	name: 'server',
	description: 'Info server',
	execute(message, args) {
		console.log(args);
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated At: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
	},
};