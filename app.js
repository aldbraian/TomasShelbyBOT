const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { shootGameRandom } = require('./sort');

const client = new Discord.Client();

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	console.log(command);
	if (command === 'order') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any order, ${message.author}!`);
		}
		message.channel.send(`${args.join(' ')} BY ORDER OF THE PEAKY BLINDERS`);
	}
	else if (command === 'shoot') {
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to shoot them');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You shot at ${taggedUser.username} and hit him/her in the ${shootGameRandom()}`);
	}
	else if (message.content.startsWith(`${prefix}whore`)) {
		message.channel.send('Everyone’s a whore, Grace. We just sell different parts of ourselves.');
	}
	else if (message.content.startsWith(`${prefix}close`)) {
		message.channel.send('Oh… And there’s a woman. Yeah. A woman… I love… and I got close. I nearly got f****** EVERYTHING!');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated At: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
	}
	else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});

client.login(token);