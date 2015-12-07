var myApp = angular.module("myApp", ['ui.calendar'])

myApp.controller('MyController', function($scope, $compile, uiCalendarConfig) {

    /* event source that contains custom events on the scope */
    $scope.events = [];

    /* event sources array */
    $scope.eventSources = [$scope.events];

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = ('Date: ' + date.title);
        console.log(date);
    };

    /* Create a function add events here
    Remember indices start at 0 eg. January is stored as 0 inside their array  */
    $scope.addEvent = function() {
        $scope.events.push({
            title : $scope.title,
            start : new Date($scope.year,$scope.month - 1,$scope.startDate,$scope.startHour),
            end : new Date($scope.year,$scope.month - 1,$scope.startDate,$scope.startHour),
            stick : true
        })
    };
    
    /* Create a function to remove events here */
    $scope.remove = function(index) {
        $scope.events.splice(index,1);
    };
    
    /* Configure your calendar object here
    Define the variables for what you want shown */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title month',
          center: '',
          right: ''
        },
        eventClick: $scope.alertOnEventClick,
      }
    };

});