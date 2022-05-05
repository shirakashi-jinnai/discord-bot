require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const token = process.env.DISCORD_TOKEN;

client.on("ready", () => {
  console.log(`${client.user.tag}でログインしています。`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    return;
  }

  console.log(message.content);

  if (/そうはならんやろ/.test(message.content)) {
    let author = message.author.username;
    message.channel.send(`${author} なっとるやろがい！`);
  }
});

client.login(token);
