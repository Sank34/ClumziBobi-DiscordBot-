const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "statuia8",
  description: "A opta statuie!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Clumzy Bobi: A opta statuie")
  .setColor("RANDOM")
  .setImage('https://i.imgur.com/nnCDFDP.png')
  .setFooter('Felicitari! | Mai ai de gasit 2 statui! :D')
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setDescription(`Bine lucrat!Ai gasit a opta Statuie Clumzy Bobi!:D`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}