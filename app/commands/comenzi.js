const { MessageEmbed } = require("discord.js")
const { serverURL } = require("../config.json")
module.exports = {
  name: "comenzi",
  description: "Comenzile lui Clumzy Bobi",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Comenzile lui Clumzy Bobi")
  .setColor("Random")
  .setDescription(`-store-(magazinul server-ului)
-statuia<nr>-(iti arata statuia cu numarul selectat
-ademoji-(adauga un emoji)
-avatar-(iti arata avatarul tau)`) 
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setFooter('Facut cu drag de 👻 Spooki Sanke 👻#1010 :D | Ip:Play.GamingWorld.Ro')
    
    return message.channel.send(embed)
  
}
}