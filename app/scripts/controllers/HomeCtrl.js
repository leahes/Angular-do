(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
    };

    angular
        .module('projectName')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
