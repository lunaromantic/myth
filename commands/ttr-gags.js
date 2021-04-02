const gags = require ('../data/ttr/gags.json')

module.exports = {
    name: "gags",
    description: "Arguments test",
    args: true,
    execute(message, args) {
        
        let userInput = args

        // *---------- FEATHER EMBED ----------------*
        const tuEmbed = {
            title: `Level ${gags[`${userInput}`]["level"]} ${gags[`${userInput}`]["track"]}: ${gags[`${userInput}`]["name"]}`,
            color: `${gags[`${userInput}`]["color"]}`,
            thumbnail: {
                url: `${gags[`${userInput}`]["image"]}`
            },
            description: `${gags[`${userInput}`]["description"]} \n
            **Accuracy:** ${gags[`${userInput}`]["accuracy"]} | **Affects:** ${gags[`${userInput}`]["affects"]} 
            ${gags[`${userInput}`]["effect"]} | ${gags[`${userInput}`]["orgEffect"]} 
            **Preceded by:** ${gags[`${userInput}`]["preceded"]} | **Succeeded by:** ${gags[`${userInput}`]["succeeded"]}
            **EXP Needed:** ${gags[`${userInput}`]["expNeeded"]} \n
            You can carry ${gags[`${userInput}`]["carry"]} of this gag.`
        }

        if (args[0] === 'feather' || 'megaphone' || 'lipstick' || 'bamboo-cane' || 'pixie-dust' || 'juggling-cubes' || 'high-dive' || 'banana-peel' || 'rake' || 'marbles') {
            return message.channel.send({embed: tuEmbed})
        } 
    }      
}
