const fs = require("fs"),
  stringify = require("json-stable-stringify-without-jsonify");

function sortByKey(a, b) {
  return a.key > b.key ? 1 : -1;
}

const writeFile = (filePath, config) => {
  const stringifiedConfig = `export enum IconfontEnum ${stringify(config, {
    cmp: sortByKey,
    space: 2,
  })};\n`.replace(/:/g, " =");

  fs.writeFileSync(filePath, stringifiedConfig, "utf8");
};

const file = {
  writeFile,
};

module.exports = file;
