module.exports = {
    name: 'Role Remove',
    description: "Role Remove commands",
    execute(message, args) {
        if (message.member.roles.cache.has('828957985362673684')) {
            message.member.roles.remove('828957985362673684').then(r => r.roles)
       } else {
            message.channel.send('You don\'t have any role :(')
        }
    }
}
