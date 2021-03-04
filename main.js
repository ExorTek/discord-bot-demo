const Discord = require("discord.js")

const client = new Discord.Client();

client.on("message",message =>{
    console.log("İncoming message : "+ message.content)

    if(message.content === "hi")
    message.channel.send("Hi bro")

    if(message.content === "what is my picture")
    message.reply(message.author.displayAvatarURL())

    if(message.content.startsWith("github"))
    const attachment = new Discord.MessageAttachment("https://github.com"+message.content.split(" ")[1]+".png?size=80")
    message.channel.send(attachment)
})
client.login("Your Token")