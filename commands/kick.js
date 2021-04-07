module.exports = {
    name: 'Kick User',
    description: 'User kick',

    execute: function (messages, args, Discord) {
        let reasons = args[1];
        const member = messages.mentions.users.first();
        if (member) {
            const memberTarger = messages.guild.members.cache.get(member.id)
            memberTarger.kick(reasons);
            messages.channel.send('User has been kicked')
        } else {
            messages.channel.send('You couldn\'t kick that member');
        }
    }
}
