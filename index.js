require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  //この要素は必須要素
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const token = process.env.DISCORD_TOKEN;

client.once("ready", () => {
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
  const { commandName } = interaction;
  if (!interaction.isCommand()) return;

  console.log("interaction", interaction.isCommand.name);

  switch (commandName) {
    case "ping":
      await interaction.reply("Pong!");
      break;

    case "bot-info":
      await interaction.reply(
        "このボットはテストボットです。色々とつぶやきます。"
      );
      break;

    case "member":
      await interaction.reply(
        `このサーバーには現在${interaction.guild.memberCount}人いる`
      );
      break;

    default:
      break;
  }
});

client.login(token);
