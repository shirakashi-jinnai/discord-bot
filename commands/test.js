const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("apexの戦績")
    .setDescription("テスト機能")
    .addStringOption(
      (option) =>
        option
          .setDescription("プラットフォームを入力してください")
          .setRequired(true)
      // .addChoices()
      // .addChoice("Funny", "gif_funny")
      // .addChoice("Meme", "gif_meme")
      // .addChoice("Movie", "gif_movie")
    ),
  // .addSubcommand((subcommand) =>
  //   subcommand
  //     .setName("pc")
  //     .setDescription("Info about the server")
  //     .addStringOption((option) =>
  //       option
  //         .setName("pid")
  //         .setDescription("プレイヤーIDを入力")
  //         .setRequired(true)
  //     )
  // )
  // .addSubcommand((subcommand) =>
  //   subcommand
  //     .setName("ps4")
  //     .setDescription("Info about the server")
  //     .addStringOption((option) =>
  //       option
  //         .setName("pid")
  //         .setDescription("プレイヤーIDを入力")
  //         .setRequired(true)
  //     )
  // )
  // .addSubcommand((subcommand) =>
  //   subcommand
  //     .setName("xbox")
  //     .setDescription("Info about the server")
  //     .addStringOption((option) =>
  //       option
  //         .setName("pid")
  //         .setDescription("プレイヤーIDを入力")
  //         .setRequired(true)
  //     )
  // ),

  async execute(interaction) {
    console.log(interaction);
    const playerID = interaction.options.getString("pid");
    // const choice = interaction.options.getChoice

    await interaction.reply(
      `このボットはテストボットです。色々とつぶやきます。${playerID}`
    );
  },
};
