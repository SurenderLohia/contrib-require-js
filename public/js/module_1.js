define(function(require) {
  var name = 'Cool Module';
  var task = 'test module-1';

  console.log('Checking here');

  function getInfo() {
    console.log('comes here');
    return 'Name: ' + name + '. ' + 'Task: ' + task;
  }

  return {
    name: name,
    task: task,
    getInfo: getInfo
  }
});

