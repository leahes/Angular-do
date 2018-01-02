(function() {
   function Task($firebaseArray) {
     var ref = firebase.database().ref().child("tasks");
     var tasks = $firebaseArray(ref);

     var dayOfYearToDate = function dateFromDay(day){
      var year = moment().year()
      var date = new Date(year, 0);
      return new Date(date.setDate(day));
    }

    var confirmedCompleted = function (task) {
      task.completed = true;
      tasks.$save(task)
    }

    var confirmedIncompleted = function (task) {
      task.completed = false;
      tasks.$save(task)
    }

     return {
       all: tasks,
       addTask: function(newTask) {
         tasks.$add(newTask);
       },
       
       completedTask: confirmedCompleted,
       incompleteTask: confirmedIncompleted
     }
   };

   angular
     .module('projectName')
     .factory('Task', ['$firebaseArray', Task]);
 })();
