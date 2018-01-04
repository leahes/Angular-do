(function() {
  function ArchiveCtrl(Task, $scope) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.incompletedTask(task);
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
          created: moment().dayOfYear(),
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
  .controller('ArchiveCtrl', ['Task','$scope', ArchiveCtrl]);
})();
