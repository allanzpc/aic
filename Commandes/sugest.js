const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
message.delete()

let msgContent = args.join(' ')
var suggestion = new Discord.RichEmbed()
  .setTitle("Nouvelle suggestion")
  .setDescription("Nous avons une nouvelle suggestion de " + message.author.username)
  .addField("Proposition :", msgContent)
  .setFooter("Les membres peuvent maintenant voter ci-dessous")
  .setColor("#2d7db8")
  
message.channel.send(suggestion).then(async msg => { await msg.react("✅"), await msg.react("❌")
})
};

module.exports.help = {
    name: "sugestion"
}