const Discord = require('discord.js')

module.exports = {
    name: 'user-info',
    description: 'User info',
    aliases: ["whois", "userinfo"],
    execute(message, args) {




        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true})}`)
        .addField(`**Joined Server**`, `${(message.author.joinedAt)}`)
        .addField(`**Joined Discord**`, `${(message.author.createdAt)}`, true)


        message.channel.send(embed)
    }
}