// los closures son funciones que se definen y crean dentro de otras funciones
// los closures son la combinacion de (funciones  + entorno donde se crea)
// lo anterior indica que el closure recuerda donde fue creado y las variables a su alcance
// closure es una funcion interna de una funcion padre
// los closures tienen acceso a las variables de la funcion padre
// los closures reciben por referencia las variable de la funcion padre, lo que indica que si
// se modifica una variable en el closure tambien se hara en la funcion padre

// no contaminar el scope global, es decir no declarar variables que esten fuera de una funcion

(function saludar(){

    let pais = 'colombia';

    function helloWorld(){
        return `saludos`;
    }

    console.log(`Hola a todos ${helloWorld()} en ${pais}`);
})();

( ()=> console.log(`Saludos desde mi segunda funcion`) )();

// ejemplo 2

var dato = 'mensaje';

function creaFunc() {
    var nombre = "Mozilla";
    function muestraNombre() {
        console.log(`${dato}: ${nombre}`);
    }

    // se retorna unicamente la definicion de la funcion(closure con las variables que estaban 
    // a su alcance al momento de su creacion, puede incluir variables globales o de su fn padre)
    return muestraNombre;
}

var miFunc = creaFunc();
miFunc();

// ejemplo 3

function creaSumador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var suma5 = creaSumador(5);
  var suma10 = creaSumador(10);

  console.log(`${suma5}`);
  console.log(`${suma5(2)}`);