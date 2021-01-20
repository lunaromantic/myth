const {prefix} = require('../data/config.json');

module.exports = {
    name: 'help',
    description: `Need help, huh? That's what this is for.`,
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args){
        const data = [];
        const {commands} = message.client;

        if(!args.length){
            data.push(`Here's a list of all my commands...`)
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\n You can also send ${prefix}help [command name] to learn more about a specific command!`)

            return message.author.send(data, {split: true}).then(() => {
                if (message.channel.type === 'dm') return
                message.reply(`I've sent you a DM with all my commands!`)
            }).catch(error => {
                message.reply(`Uh oh! It looks like I can't DM you! See if you have DM's enabled for server members and try again.`)
            })
        }

        const name = args[0].toLowerCase()
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name))
    
        if (!command) {
            return message.reply(`I don't think I have that command! Did you spell it wrong..?`)
        }

        data.push(`**Name:** ${command.name}`)

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`)
        if (command.description) data.push(`**Description:** ${command.description}`)
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`)

        data.push(`**Cooldown:** ${command.cooldown || 3} seconds(s)`)

        message.channel.send(data, {split: true})
    }
}