const { SlashCommandBuilder } = require("@discordjs/builders");
const { getApexResult } = require("../utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("apexの戦績")
    .setDescription("プレイヤーIDを入力し戦績を表示")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("origin")
        .setDescription("Info about the server")
        .addStringOption((option) =>
          option
            .setName("pid")
            .setDescription("プレイヤーIDを入力")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("ps4")
        .setDescription("Info about the server")
        .addStringOption((option) =>
          option
            .setName("pid")
            .setDescription("プレイヤーIDを入力")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("xbox")
        .setDescription("Info about the server")
        .addStringOption((option) =>
          option
            .setName("pid")
            .setDescription("プレイヤーIDを入力")
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const playerID = interaction.options.getString("pid");
    let platform = interaction.options.getSubcommand();

    const data = await getApexResult(platform, playerID);

    await interaction.reply(
      `このボットはテストボットです。色々とつぶやきます。${playerID},${platform}\n${data}`
    );
  },
};
