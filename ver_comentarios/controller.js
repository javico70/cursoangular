var app = angular.module("miApp",[]);
app.controller("miController",function($scope){
    $scope.nombre="Javi";
    $scope.nuevoComentario = {};
    $scope.comentarios=[
        {
            comentario: "muy bueno",
            usuario: "el pelota"
        },
        {
            comentario: "regulín",
            usuario: "tontolaba"
        },
        {
            comentario: "tirando a flojo",
            usuario: "tontolaba"
        }
    ];
    $scope.agregarComentario = function () {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario={};
    }
});