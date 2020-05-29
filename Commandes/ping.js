const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const debut = Date.now(); 
    var ping = new Discord.RichEmbed()
    .setTitle("conexion...")
    .setColor('#08f320')
    .addField(`tu as ${Date.now() - debut} ms de ping`)
    console.log(ping)


};
module.exports.help = {
    name: "ping"
};