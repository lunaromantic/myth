module.exports = {
    name: "avatar",
    description: "Show your avatar-- or someone else's.",
    aliases: ['pfp', 'icon'],
    execute(message){

        const userPFP = message.mentions.users.map(user => {
            return user.displayAvatarURL({ format: "png", dynamic: true})
        })

        const  userName = message.mentions.users.map(user => {
            return user.username;
        });

        const yourAvatar = {
            color: "#ff99ff",
            title: `Your Avatar`,
            image: {
                url: `${message.author.displayAvatarURL({ format: "png", dynamic: true})}`
            },
            timestamp: Date.now()
        }

        const userAvatar = {
            color: "#ff99ff",
            title: `${userName}'s Avatar`,
            image: {
                url: `${userPFP}`
            },
            timestamp: Date.now()
        }

        if (!message.mentions.users.size) {
            return message.channel.send({embed: yourAvatar})
        }
        message.channel.send({embed: userAvatar})
    }
}