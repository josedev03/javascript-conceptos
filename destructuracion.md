# Destructuracion objetos!

Destructuracion normal
~~~
const persona = {
    nombre: 'jose',
    apellido: 'rodriguez'
}

const {nombre, apellido} = persona;
console.log(nombre);
~~~

Destructuracion con nombres personalizado
~~~
const persona = {
    nombre: 'jose',
    apellido: 'rodriguez'
}

const {nombre:fullName, apellido:lastName} = persona;
console.log(fullName);
~~~

Destructuración en argumentos
~~~
const persona = {
    nombre: 'jose',
    apellido: 'rodriguez'
}

const saludar = ({apellido}) => `Buen día señor@ ${apellido}`
const message = saludar(persona);
console.log(message)
~~~

Destructuración en response de una function
~~~
const {nombre, apellido} = getPersona();
~~~

Destructurar propiedades de un objeto dentro de otro objeto
~~~
const persona = {
    nombre: 'jose',
    apellido: 'rodriguez',
    latitudLongitud: {
        latitud: 102030,
        longitud: -302010
    }
}

const {latitudLongitud: {latitud, longitud}} = persona;
console.log(latitud, longitud);

// Con nombre personalizado
const {latitudLongitud: {latitud:lat, longitud:lon}} = persona;
console.log(lat, lon);
~~~

# Destructuracion Arreglos!

Destructuracion normal
~~~
const retornaArreglo = () => (['ABC', 123]);
const [letras, numeros] = retonraArrglo();
console.log(letras, numeros)
~~~

Destructuración ignorando posiciones
~~~
const personajes = ['goku', 'vegeta', 'krilin'];
const [, , personaje3];
console.log(personaje3)
~~~
