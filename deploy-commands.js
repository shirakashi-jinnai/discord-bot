require("dotenv").config();
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

// discordAPTに対してスラッシュコマンドを登録
const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Replis with pong!"),
  new SlashCommandBuilder().setName("bot-info").setDescription("ボットの詳細"),
  new SlashCommandBuilder()
    .setName("member")
    .setDescription("サーバーメンバーの詳細"),
].map((command) => command.toJSON());
const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.API_ID, process.env.GUILD_ID),
      { body: commands }
    );
  } catch (err) {
    console.error(err);
  }
})();
