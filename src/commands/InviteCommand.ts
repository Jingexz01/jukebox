import { BaseCommand } from "../structures/BaseCommand";
import { IMessage } from "../../typings";
import { DefineCommand } from "../utils/decorators/DefineCommand";
import { createEmbed } from "../utils/createEmbed";
import { disableInviteCmd } from "../config";

@DefineCommand({
    name: "link",
    description: "Send the bot's link and owner info",
    usage: "{prefix}link",
    disable: disableInviteCmd
})
export class InviteCommand extends BaseCommand {
    public async execute(message: IMessage): Promise<void> {
        message.channel.send(
            createEmbed("info")
                .setTimestamp()
                .setTitle(`Jingexz01's Social Accounts`)
                .setFooter(`Command Invite Was Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
                .addField("Discord Support Server", `[Click here](https://discord.gg/DBHxxT7)`)
                .addField("Jingexz01's Youtube Account", `[Subscribe And Check Out My Youtube Channel!](https://youtube.com/jingexz01)`)
                .addField("Jingexz01's Website", `[Open Here](https://jingexz01.cf)`)
                .addField("Jingexz01's Twitter", `[Follow Me](https://twitter.com/jingexz01)`)
                .addField("Jingexz01's Instagram", `[Follow Me On Instagram](https://instagram.com/jingexz01)`)
                .addField("Jingexz01's Facebook Page", `[Follow And Like My Facebook Page](https://facebook.com/jingexz01)`)
                .addField("Discord Bot Invite Link", `[Click here](${await this.client.generateInvite({ permissions: 53857345 })})`)
        ).catch(e => this.client.logger.error("PLAY_CMD_ERR:", e));
    }
}
