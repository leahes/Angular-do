(function() {
  function ArchiveCtrl(Task) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.incompleteTask(task);
    }

    this.show = function(task){
      return task.created < moment().format() - 0 && task.complete == false
    };
// moment date and time look up format.
    // this.addTask = function(){
    //   if (this.title){
    //     this.task.$add({
    //       title: this.title,
    //       description: this.description,
    //       priority: taskPriority,
    //       created: moment().dayOfYear(),
    //       completed: false
    //     });
    //     this.title = ' ';
    //   }
    // };
    //   $scope.clearfunction = function(event){
    //     event.messageTitle = null;
    //     event.messageDescription = null;
    //     event.taskPriority = "high";
    //   }
    // }
   }
  angular
  .module('projectName')
  .controller('ArchiveCtrl', ['Task', ArchiveCtrl]);
})();
