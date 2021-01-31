const { prompt, exec } = require('./utils');
const shelljs = require('shelljs');

async function build() {
  await exec('yarn build');
  const commit = await prompt('Please enter commit message：')
  await exec('git add .')
  await exec(`git commit -m '${commit}'`)
  await exec('git push')
  console.info('push success');
  shelljs.exit(1);
}

build();
