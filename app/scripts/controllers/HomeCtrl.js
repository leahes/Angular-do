(function() {
  function HomeCtrl(Task,$scope) {
    this.tasks = Task.all;
    // console.log(this.tasks)
    this.taskStatus = function (task) {
      Task.completedTask(task);
    }

    this.hide = function(task) {
      return task.created < moment().format() - 7 || task.completed == true
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
      // $scope. = function(event) {
      //   event.isCompleted = true;
      //   var task = tasks.child(item.$id);
      //   task.update({ isCompleted: true })
      // }
    }
  }

  // this.expiredTask = function (created) {
  //      if (created < Date.now() - 604800000) {
  //          return true;
  //        }
    // }

  angular
  .module('projectName')
  .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
