import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import http from 'http';

import ready from './listeners/ready';
import interactionCreate from './listeners/interactionCreate';
import embedMessage from './listeners/embedMessage';

console.log('Bot is starting...');
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

ready(client);
interactionCreate(client);
embedMessage(client);

client.login(process.env.BOT_TOKEN);

const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running\n');
  })
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
