const { default: axios } = require("axios");

require("dotenv").config();

const getApexResult = async (platform, platformUserIdentifier) => {
  try {
    const { data } = await axios.get(
      `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`,
      { headers: { "TRN-Api-Key": process.env.TRN_API_KEY } }
    );
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.log("エラー発生", err);
  }
};

export default getApexResult;
