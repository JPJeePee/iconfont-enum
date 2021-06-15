const lodash = require("lodash");

const parseIconfontName = svgXml => {
  const iconfontNames = [];
  if (svgXml && svgXml.svg && Array.isArray(svgXml.svg.symbol)) {
    svgXml.svg.symbol.forEach(symbol => {
      if (symbol.$ && symbol.$.id) {
        iconfontNames.push(symbol.$.id);
      }
    });
  }
  return iconfontNames;
};

const arr2Obj = arr => {
  const obj = {};
  if (Array.isArray(arr)) {
    arr.forEach(item => {
      obj[lodash.camelCase(item)] = item;
    });
  }
  return obj;
};

const parse = {
  parseIconfontName,
  arr2Obj,
};

module.exports = parse;
