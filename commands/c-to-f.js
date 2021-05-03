module.exports = {
    name: "c-to-f",
    description: "Convert Celsius to Fahrenheit!",
    args: true,
    aliases: ['f'],
    execute(message, args) {
        parseFloat(args)

        console.log(args)
        console.log(isNaN(args))

        let calculations = Math.round((args * 1.8) + 32)

        const embed = {
            title: "Conversion: Celsius to Fahrenheit",
            description: `${args}C converted to Fahrenheit is ${calculations}F.`,
            color: "#FF99FF"
        }

        message.channel.send({embed: embed})


    },
}