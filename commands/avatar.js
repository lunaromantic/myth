module.exports = {
    name: "avatar",
    description: "Show your avatar-- or someone else's.",
    aliases: ['pfp', 'icon'],
    execute(message){
        const yourAvatar = {
            color: "#ff99ff",
            title: `Your Avatar`,
            image: {
                url: message.author.displayAvatarURL({ format: "png", dynamic: true})
            },
            timestamp: Date.now()
        }

        if (!message.mentions.users.size) {
            return message.channel.send({embed: yourAvatar})
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({ format: "png", dynamic: true})}`
        })

        message.channel.send(avatarList)
    }
}