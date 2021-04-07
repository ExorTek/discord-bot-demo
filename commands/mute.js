module.exports = {
    name: 'Mute',
    description: 'Mute command',
    execute: function (message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'mute'
            )
        } else {
            message.channel.send('Can\'t find that member!')
        }
    }
}
