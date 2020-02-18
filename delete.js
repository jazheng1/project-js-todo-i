function remove(taskNumber, list) {
  console.log(`Deleting task ${taskNumber} from the TODO list...`);
  list.splice(taskNumber - 1, 1);
}

module.exports = remove;
