module.exports = {
    name: "invite",
    description: "Invite me to your server!",
    args: false,
    execute(message, args) {
       
        const embed = {
            color: "#ff99ff",
            title: "My invite link!",
            description: "Oh? You would like to invite me to your server? Look no further than the link here! \n \n https://discord.com/api/oauth2/authorize?client_id=755511130243203193&permissions=0&scope=bot"
        }

        message.channel.send({embed: embed})

    },
}