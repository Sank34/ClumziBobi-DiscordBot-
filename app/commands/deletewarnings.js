const Discord = require('discord.js');
const db = require('quick.db');
const warnings = require('./warnings');
module.exports = {
   
        name: "deletewarnings",
        description:"deletewarnings",
        execute: (client, message, args) => {
    if (!message.guild.me.permissions.has("MANAGE_SERVER")) {
        let botnopermsembed = new Discord.MessageEmbed()
            .setDescription(
                "Nu am permisiunea de a face asta"
            )
            .setColor("#0B0B0B");
        message.channel.send(botnopermsembed);

        return;
            }
            if (!message.member.permissions.has("MANAGE_SERVER")) {
                let nopermsembed = new Discord.MessageEmbed()
                    .setDescription(
                        "Nu ai permisiunea de a face asta - .-"
                    )
                    .setColor("#0B0B0B");
                message.channel.send(nopermsembed);
    
                return;
            }

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send({
            embed: {
                color: 0x0B0B0B,
                description: `Te rog,specifica un user.`
            }
        });

        if(user.bot) return message.channel.send({
            embed: {
                color: 0x0B0B0B,
                description: `BRUH,nu poti da warn la boti :))`
            }
        });
        if(warnings === null) return message.channel.send({
            embed: {
                color: 0x0B0B0B,
                description: `Acest user nu are niciun advertisment.`
            }
        });


        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send({
            embed: {
                description: `:white_check_mark: Au fost sterse cu succes warn-urile lui <@${user.id}> !`
            }
        })
    }
    }