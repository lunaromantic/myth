const fetch = require('node-fetch')
module.exports = {
    name: 'cat',
    description: 'meow',
    aliases: ['meow', 'purr', 'kitty', 'kitten'],
    args: false,
    execute(message, args){

        async function cat(){
            const {file} = await fetch("https://aws.random.cat/meow")
            .then((res) => res.json())


            const embed = {
                color: "#ff99ff",
                title: 'Meow!',
                image: {
                    url: file
                },
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