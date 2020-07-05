//Discord Connection
const Discord = require('discord.js');
const bot = new Discord.Client();

const discordKey = "NzI5MjE5MDczNzE5OTI2Nzg1.XwF1CQ.-jOd7SXLO7uDPJcm0jLOeJROq7w";

var botActive = false;

//Bot Start Up
bot.on('message', message => {
  if(message.member.roles.some(r=>["Admin", "Owner"].includes(r.name)) ) {
      if ( message.content == "!Start" ) {
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


//Bot Commands
bot.on('message', message => {
  if (botActive) {
      switch( message.content ) {
          case "~whatdoyoudo": 
              message.channel.send("All sorts of things! Well, mostly just listen in like an NSA agent, but i have some cool functionalities underway. One example is talking with dimwits on the server like you.")
              break;
        };
    };
});