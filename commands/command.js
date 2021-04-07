module.exports = {
    name: 'Command',
    description: "Embeds",
    execute: function (message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#3498db')
            .setTitle('Rules')
            .setURL('https://www.github.com/ExorTek')
            .setDescription('Role').addFields(
                {name: 'Rule 1', value: 'sss'},
                {name: 'Rule 2', value: 'aaa'},
                {name: 'Rule 3', value: 'dddd'},
                {name: 'Rule 4', value: 'fff'}
            )
            .setImage('https://avatars.githubusercontent.com/u/54851701?v=4')
            .setFooter('Message')

        message.channel.send(newEmbed);
    }
}
