const axios = require("axios"),
  xml2js = require("xml2js");

const fetchXml = async url => {
  try {
    const { data } = await axios.get(url);
    const matches = String(data).match(/'<svg>(.+?)<\/svg>'/);

    if (matches) {
      return new Promise((resolve, reject) => {
        xml2js.parseString(
          `<svg>${matches[1]}</svg>`,
          { rootName: "svg" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
      });
    }

    throw new Error("symbol_url is wrong.");
  } catch (e) {
    process.exit(1);
    throw e;
  }
};

const fetch = {
  fetchXml,
};

module.exports = fetch;
