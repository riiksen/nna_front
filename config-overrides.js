const { addWebpackAlias, addLessLoader, override } = require('customize-cra');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const path = require('path');

const lessVariables = lessToJs(fs.readFileSync('./variables.less', 'utf8'));

module.exports = override(
  addLessLoader({
    'modifyVars':  lessVariables,
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
);
