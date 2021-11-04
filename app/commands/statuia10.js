const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "statuia10",
  description: "A zecea statuie!",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Clumzy Bobi: A zecea statuie")
  .setColor("RANDOM")
  .setImage('https://i.imgur.com/VmUAAzZ.png')
  .setFooter('Felicitari! | Scrie *ajutor* pentru a afla cum sa iti revendici premiul! :D')
  .setThumbnail('https://i.imgur.com/tsMit88.png')
  .setDescription(`Bine lucrat!Ai gasit toate Statuiele Clumzy Bobi!:D`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}