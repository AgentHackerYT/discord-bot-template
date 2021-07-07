const figlet = require('util').promisify(require('figlet'));
module.exports = {
    name: "banner",
    description: "Makes banner/ascii",
    execute(client , message , args){
        let banner = args.join(" ");
     if(!banner) return message.channel.send('No message written')
        return message.channel.send(await figlet(banner), { code: true });
    }
}