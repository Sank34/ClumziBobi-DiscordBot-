const { PREFIX } = require("../config");
module.exports = {
    
        name: "lockdown",
        description: "Inchide un canal",
        aliases: ["lock"],
        execute: async(client, message, args) => {
 
           if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply({
        embed: {
            description: '**Nu ai permisiunea de a folosii aceasta comanda :/**'
        }
    });

    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: true,
        ADD_REACTIONS: false
    })
    message.channel.send({
        embed: {
            title: `Canalul a fost actualizat!`,
            description: ':white_check_mark: **Canal blocat!**',
            footer: {
                text: `${PREFIX}unlock Pentru a debloca acest canal!`
           
            }
        }
    })
    }
};
