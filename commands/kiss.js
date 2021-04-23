module.exports = {
    name: "kiss",
    description: "Kiss someone!",
    args: true,
    execute(message, args) {
        let taggedUser = message.mentions.users.first()
        const randomNumber = Math.floor(Math.random() * 6) + 1

        console.log(randomNumber)
        const embed = {
            title: `Aww, ${message.author.username} has kissed ${taggedUser.username}! How cute!`,
            image: {
                url: `https://raw.githubusercontent.com/lunaromantic/myth/main/data/bot-images/hug-gifs/${randomNumber}.gif`
            }
        }



        

        message.channel.send({embed: embed})


    },
}