const description = {
  demand: true,
  alias: 'd',
  desc: 'Describe task for to do'
}

const checked = {
  default: true,
  alias: 'c'
}

const argv = require('yargs')
  .command('create', 'this command is util for create task', { description })
  .command('update', 'this command is util for update task', { description, checked })
  .command('list', 'this commando is util for list to do task')
  .command('delete', 'delete task', { description })
  .help()
  .argv;

module.exports = {
  argv
}
