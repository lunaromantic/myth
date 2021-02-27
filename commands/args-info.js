module.exports = {
    name: "args-info",
    description: "Arguments test",
    args: true,
    execute(message, args) {
        if (args [0] === 'foo'){
            return message.channel.send('Bar!')
            }
            message.channel.send(`First argument: *${args[0]}*`)
    },
}