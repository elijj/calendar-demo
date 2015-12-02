var myApp = angular.module("myApp", ['ui.calendar'])

myApp.controller('MyController', function($scope, $compile, uiCalendarConfig) {

    /* event source that contains custom events on the scope */
    $scope.events = [];

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = ('Date: ' + date.start.i);
        console.log(date);
    };

    /* add custom event*/
    //the index for months starts at 0
    $scope.addEvent = function() {
      $scope.events.push({
        title: $scope.title,
        start: new Date($scope.year, $scope.month - 1, $scope.startDate, $scope.startHour),
        end: new Date($scope.year, $scope.month - 1, $scope.finishDate, $scope.finishHour),
        stick: true
      });
      $scope.clickDate = 0;
    };
    
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title month agendaWeek',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventMouseover: $scope.hoverEvent
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events];
});