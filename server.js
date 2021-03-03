const Discord = require("discord.js");
const client = new Discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");

client.once("ready", () => {
  console.log("gak bisa basa engres");
});

client.on("message", async message => {
if(!message.content.startsWith('Zn.'))return;  
let content = message.content
    chatbot.getReply(content).then(r => message.channel.send(r));
  });
  
client.login(process.env.TOKEN);
