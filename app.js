const Discord = require('discord.js');
const dotenv = require('dotenv');
const { prefix, token } = require('./config.json');

dotenv.config();

const client = new Discord.Client();

// client.once('ready', () => {
// 	console.log('Ready!');
// });
client.on('message', message => {
	if (message.content === '!whore') {
		message.channel.send('Everyone’s a whore, Grace. We just sell different parts of ourselves.');
	}
});

// client.login(process.env.TOKEN);
client.login(token);