const { default: axios } = require("axios");

require("dotenv").config();

module.exports = {
  async getApexResult(platform, platformUserIdentifier) {
    try {
      const { data } = await axios.get(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`,
        { headers: { "TRN-Api-Key": process.env.TRN_API_KEY } }
      );
      console.log("fetch data");
      return data;
    } catch (err) {
      console.log("エラー発生", err);
    }
  },
};
