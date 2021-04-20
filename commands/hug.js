module.exports = {
    name: "hug",
    description: "Hug someone!",
    args: true,
    execute(message, args) {
        let taggedUser = message.mentions.users.first()
        const randomNumber = Math.floor(Math.random() * 4) + 1

        console.log(randomNumber)
        const embed = {
            title: `${message.author.username} has hugged ${taggedUser.username}!`,
            image: {
                url: `https://raw.githubusercontent.com/lunaromantic/myth/main/data/bot-images/hug-gifs/${randomNumber}.gif`
            }
        }



        

        message.channel.send({embed: embed})


    },
}