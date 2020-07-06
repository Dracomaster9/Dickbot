//Discord Connection
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const discordKey = "";

bot.on('error', (e) => console.error(e));
bot.on('warning', (e) => console.warn(e));
bot.on('debug', (e) => console.info(e));

var botActive = false;

//Bot Start Up
bot.on('message', message => {
  if(message.member.roles.some(r=>["Admin", "Owner"].includes(r.name)) ) {
      if ( message.content == "!start" ) {
          if ( botActive ) {
              message.channel.send("I'm Awake!");
          } else if ( !botActive ) {
            botActive = true;
            message.channel.send("Don't you fucking test me boy");
          };
      } else if ( message.content == "!stop" ) {
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
          case "!whatdoyoudo": 
              message.channel.send("All sorts of things! Well, mostly just listen in like an NSA agent, but i have some cool functionalities underway. One example is talking with dimwits on the server like you.");
        };
    };
  });

  //Ban and Kick Commands courtesy of https://stackoverflow.com/a/54892548
  //if the message starts with "!kick"
 bot.on("message", (message) => {
  if (message.content.startsWith("!kick")) {
    //if the message comes from an admin role
    if (!message.member.roles.find("Owner", "Admin"))
      return;
  // Easy way to get member object though mentions.
  var member = message.mentions.members.first();
  // Kick
  member.kick().then((member) => {
      // Successmessage
      message.channel.send(":wave: " + member.displayName + " has been smashed. ");
  }).catch(() => {
      // Failmessage
      message.channel.send("Access Denied");
  });
}});

bot.on("message", (message) => {
  if (message.content.startsWith("!ban")) {

      if (!message.member.roles.find("Owner", "Admin"))
          return;
      // Easy way to get member object though mentions.
      var member = message.mentions.members.first();
      // ban
      member.ban().then((member) => {
          // Successmessage
          message.channel.send(":wave: " + member.displayName + " has been wobbled.");
      }).catch(() => {
          // Failmessage
          message.channel.send("Access Denied");
      });
}});

bot.login(discordKey);