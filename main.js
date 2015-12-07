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

    };
    
    /* Create a function to remove events here */
    $scope.remove = function(index) {

    };
    
    /* Configure your calendar object here
    Define the variables for what you want shown */
    $scope.uiConfig = {
      calendar:{
        height: 
        editable: 
        header:{
          left: 
          center:
          right:
        },
        eventClick: $scope.alertOnEventClick,
      }
    };

});