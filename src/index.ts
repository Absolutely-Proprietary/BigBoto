import { Client } from 'discord.js';

const client = new Client({ intents: 'Guilds' });

client.on('ready', () => console.log('Ready to begin!'));

client.on('disconnected', () => {
	console.log('Disconnected!');
	process.exit(1);
});

// This code will run once the bot receives any message.
client.on("message", msg => {
	if (msg.content.indexOf('ping') === 0) {
		msg.channel.send('pong!');
		console.log('pong-ed ' + msg.author.username);
	}
});

client.login('BOT_TOKEN');