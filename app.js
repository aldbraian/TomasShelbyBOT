const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { shootGameRandom } = require('./sort');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

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
	else if (command === 'whore') {
		message.channel.send('Everyone’s a whore, Grace. We just sell different parts of ourselves.');
	}
	else if (command === 'close') {
		message.channel.send('Oh… And there’s a woman. Yeah. A woman… I love… and I got close. I nearly got f****** EVERYTHING!');
	}
	else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated At: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
	}
	else if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Do I look like a person that wants a simple life? ${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
		}
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ format: 'png', dynamic: true })}`;
		});
		message.channel.send(avatarList);
	}
	else if (command === 'prune') {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
		const amount = parseInt(args[0]) + 1;
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount < 2 || amount > 100) {
			return message.reply('you need to input a number between 2 and 100.');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.log(err);
			if (err.code === 50013) {
				return message.channel.send('I can\'t prune messages because I don\'t have permissions');
			}
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});

client.login(token);