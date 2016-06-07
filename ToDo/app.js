// es la dependencia de https://github.com/grevory/angular-local-storage

angular.module("todoApp",["LocalStorageModule"])
    .controller("todoController",function ($scope,localStorageService) {
        if(localStorageService.get("localSTodo")){
            $scope.listaActividades=localStorageService.get("localSTodo");
        }
        else {
            $scope.listaActividades = [];
        }
        $scope.$watch(function () {
            return $scope.newActv;
        }),function (newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        }
        /*$scope.actividades={};
        $actividades={
            accion: $scope.actividades.accion,
            hora:   $scope.actividades.hora
        },*/
        $scope.addLista=function () {
            $scope.listaActividades.push($scope.actividades);
            $scope.actividades={};
            localStorageService.set("localSTodo",$scope.listaActividades);
            console.log($scope.actividades);
            //console.log(listaActividades);
        }
        $scope.borrarLista=function(){
            $scope.listaActividades=[];
            localStorageService.set("localSTodo",$scope.listaActividades);
        }

    });

