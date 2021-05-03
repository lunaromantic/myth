module.exports = {
    name: "prune",
    description: "Remove a specified amount of messages. OWNER ONLY.",
    permissions: 'MANAGE_MESSAGES',
    guildOnly: true,
    execute(message, args){
        const amount = parseInt(args[0]) + 1

            if (isNaN(amount)) {
                return message.reply(`Ehh... I don't think that's a number... Try again!`)
            } else if (amount < 2 || amount > 100) {
                return message.reply(`Err.. You need to input a number between 2 and 100...`)
            } else message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err)
                message.channel.send('Oops! There was an error trying to prune messages within this channel!')
            })
    },
}