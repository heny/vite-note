const { prompt, exec } = require('./utils');

async function build() {
  await exec('yarn build');
  const commit = await prompt('Please enter commit message：', { default: 'deploy' })
  await exec('git add .')
  await exec(`git commit -m '${commit}'`)
  await exec('git push')
  exec(`
    upload success, Please run exec to publish:
    yarn deploy
  `)
}

build();
