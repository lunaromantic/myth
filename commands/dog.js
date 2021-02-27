const fetch = require('node-fetch')
module.exports = {
    name: 'dog',
    description: 'woof',
    aliases: ['woof', 'bark', 'bork', 'doggo', 'pupper', 'pup', 'puppy'],
    args: false,
    execute(msg, args){

        async function dog(){
            const {message} = await fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())


            const embed = {
                color: "#ff99ff",
                title: 'Woof!',
                image: {
                    url: message
                },
                timestamp: Date.now(),

                footer: {
                    text: `Requested by ${msg.author.tag}`,
                    icon_url: msg.author.displayAvatarURL({ format: "png", dynamic: true})
                }
            }
    

            msg.channel.send({embed: embed})
        }

        dog()


    }
}