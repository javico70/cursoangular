var paisesMundoApp = angular.module("paisesMundoApp",[]);

paisesMundoApp.controller("paisesMundoCtrl",function ($scope,$http) {
    $scope.region_code = "americas"; //  sale esta por defecto. Si se quita da igual, pero en blank la primera
    $scope.region_code = "";
    $scope.titulo= " Países del mundo";
    var urlCountries="https://restcountries.eu/rest/v1/region/";

    $scope.cargarPaises = function () {
        console.log("hola, se ha seleccionado: "+ $scope.region_code);
        $http.get(urlCountries + $scope.region_code)
            .success(function (listaPaises) {
                console.log(listaPaises);
                $scope.lista_paises=listaPaises;
        })
    };
    
});