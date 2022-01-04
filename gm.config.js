const shelljs = require('shelljs');
module.exports = {
  callback() {
    console.log('开始部署：');
    shelljs.exec('yarn deploy');
  },
};
