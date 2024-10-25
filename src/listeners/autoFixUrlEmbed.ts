import { Client, Message, TextChannel } from "discord.js";
import { getMessageChannel } from "../utils/discord";

export default (client: Client): void => {
    client.on('messageCreate', async (message: Message) => {
        try {
            const channel = getMessageChannel(client, message) as TextChannel;

            if (message.author.bot) return

            const { content } = message

            const regexTwitterDomain = /https:\/\/[a-zA-Z0-9]*(?:twitter|x)\.com/gm
            const fixedTwitterDomain = "https://fxtwitter.com"
            
            const regexInstagramDoamin = /https:\/\/[a-zA-Z0-9.]*?(?:instagram)\.com/gm
            const fixedInstagramDomain = "https://ddinstagram.com"
            
            const regexRedditDoamin = /https:\/\/[a-zA-Z0-9.]*?(?:reddit)\.com/gm
            const fixedRedditDomain = "https://rxddit.com"

            if (regexTwitterDomain.test(content)) {
                message.delete()
                await channel.send(content.replaceAll(regexTwitterDomain, fixedTwitterDomain))
                return
            }

            if (regexInstagramDoamin.test(content)) {
                message.delete()
                await channel.send(content.replaceAll(regexInstagramDoamin, fixedInstagramDomain))
                return
            }

            if (regexRedditDoamin.test(content)) {
                message.delete()
                await channel.send(content.replaceAll(regexRedditDoamin, fixedRedditDomain))
                return
            }

        } catch (error) {
            console.error(error)
        }
    });
};
