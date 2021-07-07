const {rps} = require('discord-rps')
module.exports = {
    name: "rps",
    description: "Play rock paper scissors",
    execute: async function(client , message , args){
        rps(message)
    }   
}