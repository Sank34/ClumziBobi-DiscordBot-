const { MessageEmbed } = require("discord.js")
const { serverURL } = require("../config.json")
module.exports = {
  name: "ajutor",
  description: "Comanda de ajutor!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Cum sa iti revendici premiul?")
  .setColor("Random")
  .setDescription(`Pentru a iti revendica premiul,trebuie sa ai o poza cu fiecare statuie Clumzy Bobi!Dupa ce ai toate statuile,contacteaza un staff online pentru a primii reward-ul!`) //Looks Cool
  .setFooter('Facut cu drag de 👻 Spooki Sanke 👻#1010 :D | Ip:Play.GamingWorld.Ro')
  .setThumbnail('https://i.imgur.com/tsMit88.png') 
    
    return message.channel.send(embed)
  
}
}