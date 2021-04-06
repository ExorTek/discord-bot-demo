module.exports = {
    name: 'Role',
    description: "Role commands",
    execute(message, args) {
        if (message.member.roles.cache.has('828957985362673684')) {
            message.channel.send("Congratulations, you have a role");
        } else {
            message.channel.send('You don\'t have a role but don\'t worry I added it for you ;)')
            message.member.roles.add('828957985362673684')
        }
    }
}
