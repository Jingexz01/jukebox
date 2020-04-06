/* eslint-disable @typescript-eslint/no-unused-vars */
import BaseCommand from "../structures/BaseCommand";
import BotClient from "../structures/Jukebox";
import { Message } from "discord.js";

export default class PlayCommand extends BaseCommand {
    constructor(public client: BotClient, readonly path: string) {
        super(client, path, {}, {
            name: "invite",
            description: "Send the bot's invite link",
            usage: "{prefix}invite"
        });
    }
    public async execute(message: Message, args: string[]): Promise<void> {
        message.channel.send(await this.client.generateInvite(53857345));
    }
}