 angular
     .module("miApp",[])
     .controller("miController", function () {
          console.log("inicializo");
          var scope=this;
          scope.algo="hola jojo";
          scope.pelis="insertar aquí";
          scope.lista_peliculas= []
         
          scope.agregarPeliculas=function () {
              console.log("Agregando");
              scope.lista_peliculas.push(scope.pelis);
          };

});