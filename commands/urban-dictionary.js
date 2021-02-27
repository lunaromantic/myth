const { default: fetch } = require('node-fetch')
const querystring = require('querystring')

module.exports = {
    name: 'urban-dictionary',
    description: 'Look up terms using Urban Dictionary!',
    aliases: ['ud', 'urbandictionary'],
    args: true,
    execute (message, args){

        async function urban(){
            if (!args.length){
                return message.channel.send(`${message.author} you need to supply a search term!`)
            }
    
            const query = querystring.stringify({ term: args.join(' ')})

            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
            .then((res) => res.json())

            if (!list.length){
                return message.channel.send(`Hmm.. I can't seem to find anything for ${args.join(' ')}... did you spell it wrong?`)
            }
            
            const embed = {
                color: '#FF99FF',
                title: `Urban Dictionary: ${args.join(' ')}`,
                description: `${list[0].definition}`,

                timestamp: Date.now(),
                footer: {
                    text: `Requested by ${message.author.tag}`,
                    icon_url: message.author.displayAvatarURL({ format: "png", dynamic: true})
                    
                },
            }

            message.channel.send({embed: embed})

           
        }
       
        urban()
    }
}