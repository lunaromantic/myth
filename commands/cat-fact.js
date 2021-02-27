const fetch = require('node-fetch')
module.exports = {
    name: 'cat-fact',
    description: 'meow',
    aliases: ['cf'],
    args: false,
    execute(message, args){

        async function cat(){
            const {fact} = await fetch("https://catfact.ninja/fact")
            .then((res) => res.json())


            const embed = {
                color: "#ff99ff",
                title: 'Cat fact!',
                description: fact,
                timestamp: Date.now(),

                footer: {
                    text: `Requested by ${message.author.tag}`,
                    icon_url: message.author.displayAvatarURL({ format: "png", dynamic: true})
                }
            }
    

            message.channel.send({embed: embed})
        }

        cat()


    }
}