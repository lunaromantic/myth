module.exports = {
    name: "hug",
    description: "Hug someone!",
    args: true,
    execute(message, args) {
        let taggedUser = message.mentions.users.first()
        const randomNumber = Math.floor(Math.random() * 3) + 1

        console.log(randomNumber)
        const embed = {
            title: `${message.author.username} has hugged ${taggedUser.username}!`,
            image: {
                files: `../data/bot-images/hug-gifs/${randomNumber}.gif`,
                url: `attachment://${randomNumber}.gif`
            }
        }



        

        message.channel.send({embed: embed})


    },
}