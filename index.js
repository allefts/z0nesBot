// https://discord.com/api/oauth2/authorize?client_id=846458592101138472&permissions=36700160&scope=bot
// 846458592101138472

const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Bot is Ready");
});

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  let userJoined = newMember.channelID;
  let userLeft = oldMember.channelID;

  if (userJoined && !userLeft) {
    const connection = await newMember.channel.join();
    const dispatcher = connection.play("z0nes.mp3");

    dispatcher.on("finish", () => {
      connection.disconnect();
    });
  } else if (userLeft) {
  }
});
