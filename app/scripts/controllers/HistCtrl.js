(function() {
  function HistCtrl(Task) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.expiredTask(task);
    }

    this.show = function(task){
      return task.created < moment().format() - 0 && task.complete == false
    };

   }
  angular
  .module('projectName')
  .controller('HistCtrl', ['Task', HistCtrl]);
})();
