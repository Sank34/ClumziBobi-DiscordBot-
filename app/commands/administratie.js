const { MessageEmbed } = require("discord.js")
const { serverURL } = require("../config.json")
module.exports = {
  name: "administratie",
  description: "Comanzi de ordin administrativ!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Comenzi de ordin administrativ!")
  .setColor("Random")
  .setDescription(`-lockdown-(blocheaza un canal)
-unlock-(deblocheaza un canal)
-purge-(sterge mesajele)
-say-(scrii ceva iar Clumzy Bobi repeta)
-warn-(avertizeaza un user)
-warnings-(iti arata toate warn urile unui user)
-deletewarnings-(sterge warn urile unui user)`) 
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setFooter('Facut cu drag de 👻 Spooki Sanke 👻#1010 :D | Ip:Play.GamingWorld.Ro')
    
    return message.channel.send(embed)
  
}
}