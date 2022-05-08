require("dotenv").config();
const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
  //この要素は必須要素(v13から必須)
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
const token = process.env.DISCORD_TOKEN;

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Collectionにkeyとvalueをセットする
  client.commands.set(command.data.name, command);
}

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

  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: "このコマンドの実行中にエラーが発生しました",
      ephemeral: true,
    });
  }
});

client.login(token);
