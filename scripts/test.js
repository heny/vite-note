const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');
const c = require('child_process')
const { prompt, exec } = require('./utils')

const resolve = (...paths) => path.resolve(__dirname, ...paths)
async function fn() {
  c.exec('ssh root@39.107.82.176 "cd /data; ls"')
  // shelljs.cd(resolve('../.vitepress/dist/'))
  // await exec('ls')
  // await exec('tar -cvf build.gz *')
  // await exec('scp build.gz root@39.107.82.176:/data/item')
}
fn();

