const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "statuia2",
  description: "A doua statuie!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Clumzy Bobi: A doua statuie")
  .setColor("RANDOM")
  .setImage('https://i.imgur.com/Ax7Sq8m.png')
  .setFooter('Felicitari! | Mai ai de gasit 8 statui! :D')
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setDescription(`Bine lucrat!Ai gasit a doua Statuie Clumzy Bobi!:D`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}