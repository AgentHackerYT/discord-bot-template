const worldometer = require('worldometer-coronavirus-info')
const Discord = require('discord.js')
module.exports = {
    name: "covid",
    description: "Get covid Info for a particular country",
 execute: async function(client , message , args){
        if(args[0] == "all" || args[0] == "world"){
            const corona =await worldometer.trackAll()
        const totalCases = corona.totalCases
        const totalDeaths = corona.totalDeaths
        const totalRecovered = corona.totalRecovered
        const activeCases = corona.activeCases
        const closedCases = corona.closedCases
        const mildCases = corona.condition.mild
        const criticalCases=corona.condition.critical
        const embed = new Discord.MessageEmbed()
        .setTitle('Cases for the world')
        .addField('Total Cases: ', totalCases, true)
        .addField('Total Deaths: ',totalDeaths, true)
        .addField('Total Recovered: ',totalRecovered, true)
        .addField('Active Cases: ', activeCases, true)
        .addField('Closed Cases: ', closedCases, true)
        .addField('Mild Cases: ', mildCases, true)
        .addField('Critical Cases: ', criticalCases, true)
        .setColor("RANDOM")
        message.channel.send(embed)
          }else{
        const corona = await worldometer.trackCountry(args.join("-"))
        let totalCases = corona.cases.total 
        if(totalCases == null) return message.channel.send('Invalid Country')
        const recovered = corona.cases.recovered
        const deaths = corona.cases.deaths
        const dischargePercent = corona.closedCases.percentage.discharge
        const deathPercent = corona.closedCases.percentage.death
        const closedCases = corona.closedCases.total
        const flagImg = corona.country.flagImg
        const countryName = corona.country.name
        const embed = new Discord.MessageEmbed()
        .setTitle('Cases for '+ countryName)
        .setThumbnail(flagImg)
        .addField('Total Cases: ', totalCases, true)
        .addField('Total Deaths: ', deaths, true)
        .addField('Total Recovered: ', recovered, true)
        .addField('Discharge Percent: ', dischargePercent, true)
        .addField('Death Percents: ', deathPercent, true)
        .addField('Closed Cases: ', closedCases, true)
        .setColor("RANDOM")
        message.channel.send(embed)
          } 
    }
}