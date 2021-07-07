const { MessageEmbed } = require('discord.js')
const db = require('discord.prefixdb')
module.exports = {
    name: "setprefix",
    description: "Change Prefix",
    async execute(client , message , args){
        if(!args[0]) return message.channel.send('Next Time insert a prefix')
        if(!message.member.hasPermission('MANAGE_GUILD', 'MANAGE_MESSAGES')) return message.channel.send('You Don\'t have permission to change prefix\nRequired Permissions\`\`\`MANAGE_GUILD , MANAGE_MESSAGES\`\`\`')
        db.set(args[0] , message)
        const embed = new MessageEmbed()
        .setTitle('Prefix Changed')
        .setDescription(`Prefix for this server is Changed to ${args[0]}`)
        .setColor(`RANDOM`)
        .setFooter('Made By Agent Hacker#0477')
        message.channel.send(embed)
    }
}