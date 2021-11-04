const Discord = require("discord.js");
const { PREFIX } = require("../config");
module.exports = {
    
        name: "unlock",
        descroption: "Deblocheaza un canal!",
        aliases: [],
        execute: async(client, message, args) => {

        if (!client.lockit) client.lockit = [];
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
            return message.reply({
                embed: {
                    description: '**Nu ai permisiunea de a folosii aceasta comanda :/**'
                }
            });
    
        message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        }).then(() => {
            message.channel.send({
                embed: {
                    title: `Canalul a fost actualizat!`,
                    color: 0x2C2F33,
                    description: ':white_check_mark: **Canal deblocat!**'
                }
            });
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        })
    }
}; 
