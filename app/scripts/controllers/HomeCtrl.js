(function() {
  function HomeCtrl(Task,$scope) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.completeTask(task);
    }

    this.isHidden = function(task){
      return task.created < (moment().seconds() - 60) || task.complete == true
    };
// moment date and time look up format.
    this.addTask = function(messageTitle, messageDescription, taskPriority){
      if (messageTitle){
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
        event.taskPriority = "high";
      }
    }
  }

  angular
  .module('projectName')
  .controller('HomeCtrl', ['Task','$scope', HomeCtrl]);
})();
