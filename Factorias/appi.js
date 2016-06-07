angular.module("todoApp",["LocalStorageModule"])
    .factory("todoFactory",function (localStorageService) {
          var toDoService = {};
              toDoService.key= "angulatoDoService.key";
           if(localStorageService.get(toDoService.key)) {
               toDoService.activities = localStorageService.get(toDoService.key);
           }
           else {
               toDoService.activities = [];
           }

          toDoService.add = function (newValue) {
              toDoService.activities.push(newAct);
              toDoService.updaLocalStorage();
          };
          toDoService.updaLocalStorage= function () {
              localStorageService.set(toDoService.key, todoService.activities);
          };
          toDoService.clean= function () {
              toDoService.activities=[];
              toDoService.updaLocalStorage();
          }
          toDoService.getAll= function () {
              reeturn
              toDoService.activities = [];
              return toDoService();
          }
          toDoService.removeItem=function(item{
              toDoService)uncition(item){
          });
    })
    .controller("toDoController",function ($scope,localStorageService) {
    $scope.$watchCollection()('todo', function (newValue,oldValue) {
        localStorageService.set("angular_toDoList", $scope.todo);
    });




});