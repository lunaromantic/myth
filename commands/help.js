const { Discord } = require('discord.js')
module.exports = {
    name: "help",
    description: "The _new_ help!",
    args: false,
    execute(message, args) {
        const embed = {
            color: 0xff99ff,
            title: 'MythBot :: Need help?',
            description: '**Information**\n`avatar`, `server`, `user-info` \n \n **Fun** \n `cat`, `dog`, `fox`, `urban-dictionary` \n \n **ToonTown Rewritten** \n `gags <gag-name>` \n \n **Roleplay** \n `hug`' ,

            timestamp: new Date(),
            footer: {
                text: `Requested by ${message.author.tag}`,
                icon_url: message.author.displayAvatarURL({ format: "png", dynamic: true})
                
            },
        }

        message.channel.send({embed: embed})
    }
}