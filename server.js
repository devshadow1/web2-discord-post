const { Client, MessageEmbed } = require("discord.js");

const client = new Client();
const prefix = "!"; //prefix

var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000; //sunucu portu | server starting port
 
client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
});


const Discord = require("discord.js");
const chalk = require("chalk");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const db = require('wio.db'); 
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    ` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`
  );
  response.sendStatus(200);
});

var channelId = db.fetch("kanal")


app.listen(4444,function(){  
  console.log("Sunucu 4444 portu ile aktif; http://localhost:4444");  //botun aktif olduğuna dair log. | log that the bot is active.
});  

client.on("message", message => {
  if (message.content === "ping") {
    message.channel.send("Pong!" + client.ping + "ms");
  }
  if (message.content === "!setchannel") {  //You can add the channel you want to send a message to with the !setchannel command. | mesaj göndermek istediğiniz kanalı !setchannel komutu ile ekleyebilirsiniz.
    db.set("kanal",message.channel.id)
    message.channel.send("Kanal ayarlandı.");
  }
  if (message.content === prefix + "reboot") {
    if (message.author.id === "895885867296653312") { //bot sahibi discord id | bot owner's user id. 
      message.channel.send("🐬 Bot yeniden başlatılıyor..").then(msg => { //restart message.
        console.log("Yeniden başlatılıyor...");
        process.exit(0);
      });
    } else
      message.channel.send(
        "Maalesef bu komutu yanlızca <@895885867296653312> kullanabilir." //bot sahibi discord id | bot owner's user id.
      );
  }
});
app.get('/post/', function (req, res) { // /post/buraya_kanala_göndermek_istediğiniz_yazıyı_yazın. | /post/Type_post_post_post_to_channel here.
  res.send(req.params.isim);
  client.channels.cache.get(db.fetch("kanal")).send(req.params.isim)
 
});
const activities_list = [
        "✨ Notification bot @c3n4p",
        "✨ Notification bot @c3n4p",
    ]; 
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]); 
    }, 2000); 
});

client.login("TOKEN_HERE");
