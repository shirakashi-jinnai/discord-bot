const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bot-info")
    .setDescription("ボットの詳細"),

  async execute(interaction) {
    await interaction.reply(
      "このボットはテストボットです。色々とつぶやきます。"
    );
  },
};
