module.exports = {
    name: 'Ban User',
    description: 'User ban',

    execute: function (messages, args, Discord) {
        let reasons = args[1];
        const member = messages.mentions.users.first();
        if (member) {
            const memberTarger = messages.guild.members.cache.get(member.id)
            memberTarger.ban({reason: reasons});
            messages.channel.send('User has been banned')
        } else {
            messages.channel.send('You couldn\'t ban that member');
        }
    }
}
