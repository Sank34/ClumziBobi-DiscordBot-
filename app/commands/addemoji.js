const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
    
        name: "addemoji",
        aliases: [""],
        description: "Adds emoji to serverr",
        category: "moderation",
        usage: "<emojiname> <link>",
        accessableby: "Administrator",
        execute: async (client, message, args) => {
       if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(`Nu ai permisiunea de a utiliza aceasta comanda!`)
    }
    
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Stii ca..trebuie sa introduci un emoji,nu?:)`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setTitle(`Emoji adaugat`)
        .setColor(`${Color}`)
        .setDescription(
          `Emoji adaugat! | Nume : ${name || `${customemoji.name}`} | Preview : [Click ](${Link})`
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Ahm..trebuie sa introduci un emoji valid geniule -_-`);
      message.channel.send(
        `Acest emoji se afla deja pe acest server!`
      );
    }
    }
}