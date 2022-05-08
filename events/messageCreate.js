module.exports = {
  name: "messageCreate",
  once: false,
  execute(message) {
    if (message.author.bot) {
      return;
    }

    if (/そうはならんやろ/.test(message.content)) {
      let author = message.author.username;
      message.channel.send(`${author} なっとるやろがい！`);
    }
  },
};
