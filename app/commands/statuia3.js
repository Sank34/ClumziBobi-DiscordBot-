const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "statuia3",
  description: "A treia statuie!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Clumzy Bobi: A treia statuie")
  .setColor("RANDOM")
  .setImage('https://i.imgur.com/KLoXYC0.png')
  .setFooter('Felicitari! | Mai ai de gasit 7 statui! :D')
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setDescription(`Bine lucrat!Ai gasit a treia Statuie Clumzy Bobi!:D`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}