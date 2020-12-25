const fs = require('fs');
const colors = require('colors');
const { boolean } = require('yargs');

let listToDo = []

function create(description) {
  loadDB()
  const todo = {
    description,
    checked: false
  }
  listToDo.push(todo)
  saveDB()
  return todo
}

function saveDB() {
  const data = JSON.stringify(listToDo)
  fs.writeFile('db/data.json', data, 'utf8', (err) => {
    if (err) throw new Error(`no se pudo grabar ${err}`)
    console.log(colors.green('filed created'))
  })
}

function loadDB() {
  try {
    listToDo = require('../db/data.json')
  } catch (err) {
    listToDo = []
  }
}

function getList() {
  loadDB()
  return listToDo
}

function showToDo(data) {
  for (const task of data) {
    console.log('====== Tarea ======='.green)
    console.log('Tarea: ', task.description)
    console.log('Estado: ', colors.blue(task.checked))
    console.log('===================='.green)
  }
}

function updateToDo(description, checked = true) {
  loadDB()
  let index = listToDo.findIndex(task => task.description === description)
  if (index >= 0) {
    listToDo[index].checked = checked
    saveDB()
    return true;
  }
  return false;
}

function remove(description) {
  loadDB()
  const list = listToDo.filter(task => task.description.toLowerCase() !== description.toLowerCase()) 
  if (list.length === listToDo.length) return false
  listToDo = list
  saveDB()
  return true
}

module.exports = {
  create,
  getList,
  showToDo,
  updateToDo,
  remove
}