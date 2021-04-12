const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}
client.once('ready', () => {
    console.log('ExorBot is Online');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hi') {
        client.commands.get('Hi').execute(message, args);
    } else if (command === 'github') {
        client.commands.get('Github').execute(message, args);
    } else if (command === 'youtube') {
        client.commands.get('Youtube').execute(message, args);
    } else if (command === 'linkedin') {
        client.commands.get('Linkedin').execute(message, args);
    } else if (command === 'steam') {
        client.commands.get('Steam').execute(message, args);
    } else if (command === 'role') {
        client.commands.get('Role').execute(message, args);
    }else if (command === 'roleremove') {
        client.commands.get('Role Remove').execute(message, args);
    }else if (command === 'command') {
        client.commands.get('Command').execute(message, args,Discord);
    }else if (command === 'clear') {
        client.commands.get('Clear Message').execute(message, args,Discord);
    }else if (command === 'kick') {
        client.commands.get('Kick User').execute(message, args,Discord);
    }else if (command === 'ban') {
        client.commands.get('Ban User').execute(message, args,Discord);
    }else if (command === 'mute') {
        client.commands.get('Mute').execute(message, args,Discord);
    }
});


client.login('-');

