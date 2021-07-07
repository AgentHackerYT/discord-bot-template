const Discord = require('discord.js')
module.exports = {
name: "ping",
description: "Latency Of the bot",
async execute(client , message , args){
    const msg = await message.channel.send("Pinging...");
    const Embed = new MessageEmbed()
      .setTitle("Pong!")
      .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
      .setDescription(
        `⌛ Latency is ${Math.floor(
          msg.createdTimestamp - message.createdTimestamp
        )}ms\n⏲️ API Ping is ${Math.round(client.ws.ping)}`
      )
      .setColor('RANDOM');
    msg.edit(Embed);
}
}