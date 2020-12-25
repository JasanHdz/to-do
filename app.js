const colors = require('colors');
const argv = require('./config').argv;
const { create, getList, showToDo, updateToDo, remove } = require('./to-do')

const command = argv._[0]

switch (command) {
  case 'create':
    const task = create(argv.description)
    console.log(task)
    break
  case 'list':
    const data = getList()
    showToDo(data)
    console.log('show all to do task'.green)
    break
  case 'update':
    const updated = updateToDo(argv.description, argv.checked)
    console.log(updated)
    break
  case 'delete':
    const cleaning = remove(argv.description)
    console.log(cleaning)
    break
  default:
    console.log('commando is not definend')
}