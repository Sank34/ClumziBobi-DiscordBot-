const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "statuia6",
  description: "A sasea statuie!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Clumzy Bobi: A sasea statuie")
  .setColor("RANDOM")
  .setImage('https://i.imgur.com/i1Yn3DP.png')
  .setFooter('Felicitari! | Mai ai de gasit 4 statui! :D')
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setDescription(`Bine lucrat!Ai gasit a sasea Statuie Clumzy Bobi!:D`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}