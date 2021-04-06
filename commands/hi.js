module.exports = {
    name: 'Hi',
    description: "Greeting commands",
    execute(message, args) {
        message.channel.send('Hello ' + message.author.username);
        message.channel.send('@everyone Say hello to ' + message.author.username);
    }
}
