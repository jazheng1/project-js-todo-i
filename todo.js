let append = require('./appennd.js');
let readList = require('./listReader');
let remove = require('./delete.js');
let process = require('process');
let fs = require('fs');
let readlineSync = require('readline-sync');
let command = process.argv[2];
let file = './todos.txt';
let text = fs.readFileSync(file, 'utf-8').split('\n');
let updateTextFile = require('./updateTextFile.js');
let completeMark = require('./completeMark.js');
let printList = require('./printList.js');

function todo() {
  if (command === 'list') {
    readList(text);
    printList(file);
  }
  if (command === 'add') {
    let addWord = readlineSync.question('What do you want to add to the list? ');
    append(addWord, text);
    updateTextFile(text);
  }
  if (command === 'delete') {
    let taskNumber = process.argv[3];
    remove(taskNumber, text);
    updateTextFile(text);
  }
  if (command === 'complete') {
    let completedTaskNumber = process.argv[3];
    completeMark(text, completedTaskNumber);
  }
}

todo();
