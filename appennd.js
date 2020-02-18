function append(task, list) {
  console.log(`Appending '${task}' to the TODO list`);
  list.push(task);
}

module.exports = append;
