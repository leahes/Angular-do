(function() {
  function HistCtrl(Task, $scope) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.expiredTask(task);
    }

    this.show = function(task){
      return task.created < moment().format() - 7 && task.complete == false
    };

    this.addTask = function(messageTitle, messageDescription, taskPriority) {
      if (messageTitle) {
        var newTask = {
          title: messageTitle,
          description: messageDescription,
          priority: taskPriority,
          created: moment().format(),
          completed: false
        };
        Task.addTask(newTask);
      }

      $scope.clearfunction = function(event){
        event.messageTitle = null;
        event.messageDescription = null;
        event.taskPriority = "low";
      }
    }
  }
  angular
  .module('projectName')
  .controller('HistCtrl', ['Task', '$scope', HistCtrl]);
})();
