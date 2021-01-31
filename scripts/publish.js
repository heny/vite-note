const simpleGit = require('simple-git');
const inquirer = require('inquirer');
const process = require('child_process');
const shelljs = require('shelljs');
const ora = require('ora');

function exec(cmd) {
  return new Promise((resolve, reject) => {
    if(shelljs.exec(cmd).code !== 0) {
      reject();
      shelljs.exit(1);
    } else {
      resolve();
    }
  })
}

async function build() {
  console.log('start build');
    await exec('yarn build');
    const { commit } = await inquirer.prompt([{
      type: 'input',
      message: 'Please enter commit message：',
      name: 'commit',
      default: 'deploy'
    }])
    console.log(commit);
    await commitGit(commit);
    console.log('push success');
    shelljs.exit(1);
}

async function commitGit(message) {
  const git = simpleGit();
  console.log('开始提交git');
  try {
    await git.raw(['add', '.'])
    await git.raw(['commit', '-m', message])
    await git.raw(['push'])
  } catch(e) {}
}

build();
