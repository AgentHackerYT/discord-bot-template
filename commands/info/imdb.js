const {imdbkey} = require('../../config.json')
const Discord = require('discord.js')
module.exports = {
    name: "imdb",
description: "Gets Info from imdb api",
async execute(client , message , args){
    if (!args.length) {
        return message.channel.send("Please give the name of movie or series")
    }

    const imob = new imdb.Client({ apiKey: imdbkey }) //You need to paste you imdb api

    let movie = await imob.get({ 'name': args.join(" ") })

    let embed = new Discord.MessageEmbed()
        .setTitle(movie.title)
        .setColor("RANDOM")
        .setThumbnail(movie.poster)
        .setDescription(movie.plot)
        .setFooter(`Ratings: ${movie.rating} | Made By Agent Hacker#0477`)
        .addField("Country", movie.country, true)
        .addField("Languages", movie.languages, true)
        .addField("Type", movie.type, true);


    message.channel.send(embed)

}
}