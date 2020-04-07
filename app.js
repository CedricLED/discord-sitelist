const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js');
var sitelist;

client.on("ready", () => {
  console.log(`ready!`);
});

client.on("message", (message) => {
  if (message.content == "!sitelist") {
    message.reply(sitelist);
  }
  if (message.content == "!setsitelist") {
    let collector = new Discord.MessageCollector(message.channel, m => m.author.id == message.author.id, {
      time: 15000
    });
    collector.on('collect', msg => {
      sitelist = msg.content;
      message.reply("Site List Set");
    });
  }
});

client.login(config.token);
