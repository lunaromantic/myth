module.exports = {
    name: 'server',
    description: 'Server info',
    execute(message) {
        message.channel.send(`This server's name is ${message.guild.name}. \n It has ${message.guild.memberCount} members.`)
    }
}