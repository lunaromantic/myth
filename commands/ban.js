module.exports = {
    name: "ban",
    description: "Arguments test",
    permissions: "BAN_MEMBERS",
    //args: true,
    execute(message, args) {

        const taggedUser = message.mentions.members.first()

        const reason = []

        if (!message.mentions.users.size) {
            return message.channel.send("You kind of need to tag someone in order to ban them!")
        }

        taggedUser.ban({reason: reason})

        const banEmbed = {
            title: `User ${taggedUser.username} has been banned.`,
            description: `Reason: ${reason}`
            
        }

        message.channel.send({embed: banEmbed})

    },
}