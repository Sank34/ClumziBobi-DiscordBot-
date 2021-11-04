const { MessageEmbed } = require("discord.js")
const { storeURL } = require("../config.json")
module.exports = {
  name: "store",
  description: "Magazinul Server-ului",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Magazinul Server-ului")
  .setColor("RANDOM")
  .setDescription(`Pentru a face cumparaturi,apasa [aici](${storeURL})  ;)`) //Looks Cool
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setFooter('Facut cu drag de 👻 Spooki Sanke 👻#1010 :D | Ip:Play.GamingWorld.Ro')
    
    
    return message.channel.send(embed)
  
}
}