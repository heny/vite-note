const simpleGit = require('simple-git');
const inquirer = require('inquirer');
const shelljs = require('shelljs');
const ora = require('ora');

async function build() {
  // const spinner = ora()
  // spinner.start('start deploy...')
  console.log('start build');
  try {
    shelljs.exec('yarn build');
    const { commit } = inquirer.prompt([{
      type: 'input',
      message: 'Please enter commit message：',
      name: 'commit',
      default: 'deploy'
    }])
    console.log(commit);
    await commitGit(commit);
    console.log('push success');
    shelljs.exit(1);
  } catch(e) {
    shelljs.exit(1);
  }
}

async function commitGit(message) {
  const git = simpleGit(process.cwd());
  try {
    await git.raw(['add', '.'])
    await git.raw(['commit', '-m', message])
    await git.raw(['push'])
  } catch(e) {}
}

build();
