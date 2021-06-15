const config = require("../iconfont.config.json"),
  fetch = require("./fetch"),
  parse = require("./parse"),
  file = require("./file");

const saveDir = config.save_dir || "./";
const excludes = config.excludes || [];

if (config.symbol_url) {
  const fetchXml = fetch.fetchXml(`https:${config.symbol_url}`);
  fetchXml.then(xml => {
    const iconfontNames = parse.parseIconfontName(xml);
    const filterIconfontNames = iconfontNames.filter(
      iconfontName => !excludes.includes(iconfontName)
    );
    file.writeFile(
      saveDir + "Iconfont.enum.ts",
      parse.arr2Obj(filterIconfontNames)
    );
  });
} else {
  throw new Error("missing symbol_url.");
}
