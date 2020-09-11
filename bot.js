require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var giphy = require('giphy-api')(process.env.GIPHY_TOKEN);

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix.length) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (command === 'ping') {
      message.reply('Pong!');
    }
  });

