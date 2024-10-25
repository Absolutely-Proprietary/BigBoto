import { Client, Message, TextChannel } from 'discord.js';

export const generalChat = (client: Client) => {
  return client.channels.cache.get('145615594991910912') as TextChannel;
};

export const getMessageChannel = (client: Client, message: Message) => {
  return client.channels.cache.get(message.channelId) as TextChannel;
};
