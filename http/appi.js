angular.module("miAppi",[])
    .controller("httpController", function ($scope, $http) {
        $scope.posts=[];
        $scope.nuevoPost={};
        console.log("comenzando con json");
        $scope.recibirGet=function () {

            $http.get("http://jsonplaceholder.typicode.com/posts")
                .success(function (data) {
                    console.log(data);
                    console.log("Ha cargado el Json");
                    $scope.posts=data;
                })
                .error(function (error) {
                    console.log("Hubo un error al cargar el Json")
                });
        };
        $scope.limpiarArray=function () {
            console.log("se ha borrado el contenido del array $scope.posts");
            $scope.posts=[];
        };
        

        var scope=this; // ver esto, si es necesario o no
        $scope.addPost=function () {
            $http.post("http://jsonplaceholder.typicode.com/posts",{
                title:  $scope.nuevoPost.title,     //son los parámetros que queremos que se envíen
                body:   $scope.nuevoPost.body,
                userId: 0
            })    // es la gran diferencia con get, que sólo recibe
                
            .success(function (data,status,headers,config) {
                console.log("Hubo paso de parámetros de forma correcta");
                console.log(data);
                ($scope.posts).push($scope.nuevoPost);
            })
            .error(function (error,status,headers,config) {
                console.log(error);
            });
        }

    });


