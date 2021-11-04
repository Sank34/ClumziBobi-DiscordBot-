const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
   
        name: "warn",
        description: "Warn staff",
        execute: async(client, message, args) => {
    if (!message.guild.me.permissions.has("MANAGE_SERVER")) {
        let botnopermsembed = new Discord.MessageEmbed()
            .setDescription(
                "Nu am permisiunea de a face asta:/"
            )
            .setColor("#0B0B0B");
        message.channel.send(botnopermsembed);

        return;
            }
            if (!message.member.permissions.has("MANAGE_SERVER")) {
                let nopermsembed = new Discord.MessageEmbed()
                    .setDescription(
                        "Se pare ca...nu esti un administrator -.-"
                    )
                    .setColor("#0B0B0B");
                message.channel.send(nopermsembed);
    
                return;
            }

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send({
            embed: {
                color: 0x0B0B0B,
                description: `Te rog specifica un user.`
            }
        });

        if(user.bot) return message.channel.send({
            embed: {
                color: 0x0B0B0B,
                description: `BRUH,nu poti da warn la boti :))`
            }
        });

        if(message.guild.owner.id === user.id) return message.channel.send({
            embed: {
                color: 0x0B0B0B,
                description: `BRUH,nu poti da warn Owner ului :))`
            }
        });

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            await message.channel.send(`**${user.username}** a fost avertizat`)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            await message.channel.send(`**${user.username}** a fost avertizat`)
        }
    }
}
    