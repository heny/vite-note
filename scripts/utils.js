require('console-color-mr');
const inquirer = require('inquirer');
const shelljs = require('shelljs');

exports.exec = function exec(cmd) {
  return new Promise((resolve, reject) => {
    console.info(`------------${cmd}------------`)
    if(shelljs.exec(cmd).code !== 0) {
      reject();
      shelljs.exit(1);
    } else {
      resolve();
    }
  })
}

exports.prompt = async function prompt(message){
  const { commit } = await inquirer.prompt([{
    type: 'input',
    message,
    name: 'commit',
    default: 'deploy'
  }])
  return commit;
}
