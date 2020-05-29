const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var help = new Discord.RichEmbed()
  .setTitle("patch-note de la dernière mise à jour")
  .addField("La dernière mise effectuer à été faite le 29/05/2020 à 11:10 par 나는 최고 다#5860")
  .addField('commandes retirés',"nous avons décider de retirer les commande `ban` et `kick` car non fonctionelle nous somme en train de travailler dessus.")
  .addField('Correctifs ajoutés', "nous avons completer le texte du `?help` ainsi que créer cette commande.")
  .setColor('#08228b')
  message.channel.send(help)
}

module.exports.help = {
  name:"patch-note"
}