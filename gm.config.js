const shell = require('shelljs');
module.exports = {
  callback() {
    shell.exec('npm run deploy');
  },
};
