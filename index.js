require("dotenv").config();
const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
  //この要素は必須要素(v13から必須)
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
module.exports = client;

const token = process.env.DISCORD_TOKEN;

//command
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Collectionにkeyとvalueをセットする
  client.commands.set(command.data.name, command);
}

//event
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    //...argsはイベントごとに引数の数が異なるため使用している
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(token);
