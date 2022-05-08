const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("member")
    .setDescription("サーバーの詳細"),

  async execute(interaction) {
    await interaction.reply(
      `サーバー名:${interaction.guild.name}\nサーバー内のメンバー:${interaction.guild.memberCount}人`
    );
  },
};
