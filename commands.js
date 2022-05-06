require("dotenv").config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

// discordAPTに対してスラッシュコマンドを登録
const commands = [
  {
    name: "ping",
    description: "Replis with pong!",
  },
];

const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Started refrenshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(process.env.API_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.error(err);
  }
})();
