module.exports = {
    name: "f-to-c",
    description: "Convert Fahrenheit to Celsius!",
    args: true,
    aliases: ['c'],
    execute(message, args) {
        parseFloat(args)

        console.log(args)
        console.log(isNaN(args))

        let calculations = Math.round((args - 32) / 1.8)

        const embed = {
            title: "Conversion: Fahrenheit to Celsius",
            description: `${args}F converted to Celsius is ${calculations}C.`,
            color: "#FF99FF"
        }

        message.channel.send({embed: embed})


    },
}