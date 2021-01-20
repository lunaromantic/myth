module.exports = {
    name: "prune",
    description: "Remove a specified amount of messages. OWNER ONLY.",
    execute(message, args){
        const amount = parseInt(args[0])

            if (isNaN(amount)) {
                return message.reply(`Ehh... I don't think that's a number... Try again!`)
            } else if (amount < 2 || amount > 100) {
                return message.reply(`Err.. You need to input a number between 2 and 100...`)
            } else if (message.author.id !== '205403532378112001'){
                return message.reply(`you're not my master, so I won't run this for you!`)
            } else message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err)
                message.channel.send('Oops! There was an error trying to prune messages within this channel!')
            })
    },
}