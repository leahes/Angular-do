(function() {
  function ArchiveCtrl(Task) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.incompletedTask(task);
    }

    this.show = function(task){
      return task.created < moment().format() - 0 && task.complete == false
    };
    
   }
  angular
  .module('projectName')
  .controller('ArchiveCtrl', ['Task', ArchiveCtrl]);
})();
