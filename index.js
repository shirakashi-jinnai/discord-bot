require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  //この要素は必須要素
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

  if (/そうはならんやろ/.test(message.content)) {
    let author = message.author.username;
    message.channel.send(`${author} なっとるやろがい！`);
  }
});

client.on("interactionCreate", async (interaction) => {
  // if (!interaction.isCommand()) {
  //   console.log(interaction.commandName);
  // }

  console.log("interaction", interaction.isCommand.name);

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(token);
