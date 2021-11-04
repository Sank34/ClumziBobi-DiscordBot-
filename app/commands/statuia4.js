const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "statuia4",
  description: "A patra statuie!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Clumzy Bobi: A patra statuie")
  .setColor("RANDOM")
  .setImage('https://i.imgur.com/HKXBbBm.png')
  .setFooter('Felicitari! | Mai ai de gasit 6 statui! :D')
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setDescription(`Bine lucrat!Ai gasit a patra Statuie Clumzy Bobi!:D`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}