import { Client, GatewayDispatchEvents, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

import ready from './listeners/ready';
import interactionCreate from './listeners/interactionCreate';
import embedMessage from './listeners/embedMessage';
import autoFixUrlEmbed from './listeners/autoFixUrlEmbed';

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
autoFixUrlEmbed(client)

client.login(process.env.BOT_TOKEN);
