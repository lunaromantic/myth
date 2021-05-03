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

        taggedUser.kick

        message.channel.send(`${taggedUser} has been kicked from the server! They can come back using an invite link!`)
    },
}