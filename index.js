//Discord Connection
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const discordKey = "";

bot.on('error', (e) => console.error(e));
bot.on('warning', (e) => console.warn(e));
bot.on('debug', (e) => console.info(e));

var botActive = false;
var prefix = "!";

//Bot Start Up
bot.on('message', message => {
  if(message.member.roles.some(r=>["Admin", "Owner"].includes(r.name)) ) {
      if ( message.content == (prefix + "start")) {
          if ( botActive ) {
              message.channel.send("I'm Awake!");
          } else if ( !botActive ) {
            botActive = true;
            message.channel.send("Don't you fucking test me boy");
          };
      } else if ( message.content == (prefix + "stop")) {
          if ( botActive ) {
              botActive = false;
              message.channel.send("Going To Sleep");
          } else if ( !botActive ) {
              message.channel.send("I'm already asleep.");
          };
      };
  };
});

//general command switch
bot.on('message', message => {
  if (botActive) {
      switch( message.content ) {
          case (prefix + "whatdoyoudo"): 
              message.channel.send("All sorts of things! Well, mostly just listen in like an NSA agent, but i have some cool functionalities underway. One example is talking with dimwits on the server like you.");
        };
    };
  });

//kick command
bot.on('message', (message) => {
    if (message.content.startsWith(prefix + "kick"))
        if (message.member.hasPermission("KICK_MEMBERS")) {
            try {msg.members.mention.first().kick()}
            catch {msg.reply("I don't have the guts to kick" + msg.members.mentions.first() + "They're too badass")}}
        else ("You can't kick" + message.members.mention.first() + "because you aren't cool enough")});
//ban command
bot.on('message', (message) => {
    if (message.content.startsWith(prefix + "kick"))
        if (message.member.hasPermission("BAN_MEMBERS")) {
            try {msg.members.mention.first().ban()}
            catch {msg.reply("I don't have the guts to ban" + msg.members.mentions.first() + "They're too badass")}}
        else ("You can't ban" + message.members.mention.first() + "because you aren't cool enough")});
//prune
bot.on('message', (message) => {
    if (message.content.startsWith(prefix + "prune")) {
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
} else if (amount < 2 || amount > 100) {
	return message.reply('you need to input a number between 2 and 100.');
}
 else (message.channel.bulkDelete(amount));       
}});

//generate youtube search links
bot.on ('message', (message) => {
    if (message.content.startsWith(prefix + "youtube")) {
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
        var replaced = str.split(' ').join('+');
        if (!args.length)
            message.channel.send ('You did not provide a search query')
        else (message.channel.send('https://www.youtube.com/results?search_query=' + replaced));
        }});

bot.login(discordKey);