const fetch = require('node-fetch')
module.exports = {
    name: 'fox',
    description: 'just fox.',
    args: false,
    execute(msg, args){

        async function fox(){
            const {image} = await fetch("https://randomfox.ca/floof/")
            .then((res) => res.json())


            const embed = {
                color: "#ff99ff",
                title: 'Ehehehe!',
                image: {
                    url: image
                },
                timestamp: Date.now(),

                footer: {
                    text: `Requested by ${msg.author.tag}`,
                    icon_url: msg.author.displayAvatarURL({ format: "png", dynamic: true})
                }
            }
    

            msg.channel.send({embed: embed})
        }

        fox()


    }
}