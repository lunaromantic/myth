module.exports = {
    name: "kiss",
    description: "Kiss someone!",
    args: true,
    execute(message, args) {
        let taggedUser = message.mentions.users.first()
        const randomNumber = Math.floor(Math.random() * 3) + 1

        console.log(randomNumber)
        const embed = {
            title: `Aww, ${message.author.username} has kissed ${taggedUser.username}! How cute!`,
            image: {
                url: `https://raw.githubusercontent.com/lunaromantic/myth/main/data/bot-images/kiss-gifs/${randomNumber}.gif`
            }
        }


        const embed2 = {
            title: `${message.author.username} has kissed themselves! Aw.. `,
            image: {
                url: `https://pa1.narvii.com/5713/e3b85ca4abaecd49150398f05e51f2536fc8426f_hq.gif`
            }        
        }

        if(taggedUser.id === message.author.id){
            message.channel.send({embed: embed2})
        } else {
            message.channel.send({embed: embed})
        }

        




    },
}