const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var help = new Discord.RichEmbed()
  .setTitle("Page d'aide du bot")
  .addField('mon préfix', "?" )
  .addField('communication', "bonjour à tous je quelque souci on été remarquer sur les commande `ban`,`kick` nous somme en train de créer deux nouvelle commande`addrole`,`dellrole`celle ci vous permetrons d'enlever d'ajouter des role par une symple commande\n je vous remercie d'avoir ajouter mon bot sur votre serveur cordialement.")
  .addField('commandes utiles', "`info <mention>`,permet de voir des information sur un personne specifique, \n`ping`, permet de saoir combien de ms met le bot à répondre,\n `caca`, essayer vous verrez^^. \n `addrole <nom du role>`, ajoute un role (**en devellopement**), \n `dellrole <nom du role>` suprime un role(**en devellopement**) \n `patch-note` grâce à cette commande vous pouvez voir les nouvauté du à la nouvelle mise à jour**__nouveau__**.")
  .addField('moderation',"`ban` bannir quelqu'un(**actuelement indisponible**), \n `kick`, expulser un membre de son serveur(**actuelement indisponible**), \n `clear <nombre de message>`, suprimer un nombre de message spécifique,")
  .setColor('#08f320')
message.channel.send(help)
}
module.exports.help = {
  name: "help"  
}