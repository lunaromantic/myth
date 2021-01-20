module.exports = {
    name: "kick",
    description: "Kick someone... maybe..?",
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
    execute(message){
        if (!message.mentions.users.size) {
            return message.reply(`Hey now, you need to tag a user to kick them!`)
        }
        
        const taggedUser = message.mentions.users.first()

        message.channel.send(`You wanted to kick ${taggedUser}, and failed! This is a fake command~`)
    },
}