angular.module("miAppi",[])
    .controller("httpController", function ($scope, $http) {
        $scope.posts=[];
        console.log("comenzando con json");
        $http.get("http://jsonplaceholder.typicode.com/posts")
            .success(function (data) {
                //console.log(data);
                $scope.posts=data;
            })
            .error(function (error) {
                
            });

        var scope=this; // ver esto
        $scope.addPost=function () {
            $http.post("http://jsonplaceholder.typicode.com/posts",{
                title:  $scope.nuevoPost.title,
                body:   $scope.nuevoPost.body,
                userId: 1
            })
            .success(function (data,status,headers,config) {
                
            })
            .error(function (error,status,headers,config) {
                console.log(error);
            });
        }

    });

//son los parámetros que queremos que se envíen
// es la gran diferencia con get, que sólo recibe