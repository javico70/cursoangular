// removeHtml quita todo caracter que conforme una etiqueta html
angular.module("miAppi",[])
    .filter("removeHtml",function () {
       return function (texto) {
           return String(texto).replace(/<[^>]+>/gm,'');  //este se esta creando ahora
       }
    })
    .controller("filtrosController",function ($scope) {
        $scope.mi_html= "<p>Hola mundo</p>";
        $scope.prueba_a_json={};
           $scope.prueba_a_json.titulo= "mi titulo" ;
           $scope.prueba_a_json.body= "mi body";
        $scope.divisa=5;
        
    });