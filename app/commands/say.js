const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "say",
  description: "Scrie ceva iar Clumzy Boby o sa repete :D",
  execute(bot, message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`Um...Se pare ca nu esti un administrator ca sa folosesti aceasta comanda..`)
    }
    
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('**Stii ca trebuie sa scrii ceva,nu?**')
    message.channel.send(text)
}
  
}
