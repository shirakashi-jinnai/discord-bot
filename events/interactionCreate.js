const client = require("..");

module.exports = {
  name: "interactionCreate",
  once: false,
  async execute(interaction) {
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
  },
};
