const { prompt, exec } = require('./utils');

async function build() {
  console.log()
  let params = process.argv.slice(-1).toString();
  await exec('yarn build');
  await exec('git add .')
  let commit;
  if(params && params.includes('-y')) {
    commit = 'deploy';
  } else {
    commit = await prompt('Please enter commit message：', { default: 'deploy' })
  }
  await exec(`git commit -m "${commit}"`)
  await exec('git push')
  exec(`
    Upload successfully, please execute deployment command:
    yarn deploy
  `)
}

build();
