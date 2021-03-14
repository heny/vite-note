// require('console-color-mr');
const inquirer = require('inquirer');
const shelljs = require('shelljs');
const dayjs = require('dayjs');

exports.exec = function exec(cmd) {
  return new Promise((resolve, reject) => {
    console.log(
      `[${log('heny', 'red')}/${log(dayjs().format('HH:mm:ss'))}]:`, 
      log(cmd, 'green')
    )
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


/**
 * const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
  };
 */

const log = (str, color, bg = true) => {
  let num = '36';
  switch(color) {
    case 'black' : num = '30'; break;
    case 'red' : num = '31'; break;
    case 'green' : num = '32'; break;
    case 'yellow' : num = '33'; break;
    case 'blue' : num = '34'; break;
    case 'magenta' : num = '35'; break;
    case 'cyan' : num = '36'; break;
    case 'white' : num = '37'; break;
  }
  return `\x1b[${num}m${str}\x1b[0m`;
}
