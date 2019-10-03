split('')
- retorna un array, separa un string segun los caracteres indicados

reverse()
- invierte las posiciones de los elementos de un array

join('')
- retorna un string, une los elementos de un array segun los caracteres indicados

charAt(posicion)
- retorna el caracter en la posicion indicada
~~~
"gato".charAt(0);
>> "g"
~~~

String.fromCharcode()
- metodo estatico, retorna un nuevo string con la representación de los caracteres ingresados como parametros
~~~
String.fromCharCode(65,66,67);
>> "ABC"
~~~

repeat(nCopias)
- construye y retorna una nueva cadena con el numero de copias del string desde el cual fue llamado
~~~
"dato".repeat(3);
>> "datodatodato"
~~~

concat(cadena1,cadena2,cadenaN)
- retorna una nueva cadena uniendo la cadena original (desde el cual fue llamado) a las cadenas que fueron pasadas como parametros
~~~
"frase".concat(" para", " concatenar");
>> "frase para concatenar"
~~~

charCodeAt(indice)
- metodo para obtener el codigo unicode de un caracter
~~~
"gato".charCodeAt(0);
>> 103
~~~

endsWith(string, [indice])
- valida si un string termina en el string indicado como parametro. opcional se puede pasar un segundo parametro para delimitar el string, retorna true/false
~~~
"mi data, mi info".endsWith('fo');
>> true
~~~

includes(stringToFind, [position])
- busca el string pasado como parametro, el segundo parametro (opcional) el cual se indica la posicion donde empezar a buscar
- retorna true or false dependiendo si se encuentra el string (case sensitive)
~~~
"data data info".includes("ta", 5);
>> true
~~~

indexOf(stringTofind, [position])
- retorna la posicion de la primera ocurrencia con el string pasado como parametro, el segundo parametro (opcional) indica la posicion donde empezar a buscar la coincidencia (case sensitive)
~~~
"Brave new world".indexOf("w");
>> 8
~~~

lastIndexOf(stringToFind, [position])
- retorna la posicion de la ultima ocurrencia con el string pasado como parametro, el segundo parametro (opcional) indica la posicion donde empezar a buscar la coincidencia (case sensitive)
~~~
"Brave new world".lastIndexOf("w");
>> 10
~~~

localeCompare(stringTocompare, [locales, options])
- compara el string actual con el pasado por parametro, retornando un valor negativo si el string actual es anterior.
si el valor es igual retorna 0, si el valor es posterior retornara un valor positivo
~~~
"adios".localeCompare("adiot");
>> -1
"adios".localeCompare("adios");
>> 0
"adios".localeCompare("adion");
>> 1
~~~

match
- retorna un array con todas las ocurrencias de una expresion regular, que esten en el String evaluado, el parametro pasado
- debe ser una expresion regular
~~~
"toda la data esta aquí".match(/a/g);
>> [ 'a', 'a', 'a', 'a', 'a', 'a' ]
~~~

padEnd(length, [stringToPad])
- retorna un nuevo string al cual se le agregara al final del string del el segundo parametro (string) tantas veces como sea necesario para completar el
- tamaño indicado en el primer parametro, si el segundo parametro no se especifica por defecto sera " "
~~~
"mi string".padEnd(15, ".")
>> "mi string......"
"mi string".padEnd(15)
>> "mi string      "
~~~

padStart(length, [stringToPad])
- retorna un nuevo string al cual se le agregara al comiezo del string del el segundo parametro (string) tantas veces como sea necesario para completar el
-- tamaño indicado en el primer parametro, si el segundo parametro no se especifica por defecto sera " "
~~~
"mi string".padStart(15, ".")
>> "......mi string"
"mi string".padStart(15)
>> "      mi string"
~~~

replace(regex|subSrt, stringToReplace|function, [flags])
- retorna un nuevo string al cual se reemplazara el substring o la expresion regular pasada en el primer parametro con el segundo parametro
- tener cuidado con el tercer parametro ya que no todos los navegadores lo soportan, es mejor crear una expresion regular que ya contenga las banderas
~~~
var regex = new RegExp(/\d/, "g");
"mi perro tiene 23 años y va 2 dias al parque".replace(regex, '..');
>> "mi perro tiene .... años y va .. dias al parque"
~~~

search(regex)
- retorna el indice el cual indica la posicion de la primera coincidencia de nuestro string con la regex pasada como parametro
~~~
var regex = new RegExp(23);
"mi perro tiene 23 años y va 2 dias al parque".search(regex);
>> 15
~~~

slice(start, [end])
- retorna un nuevo string, el cual es la extracción de una sección de una cadena, start: indice basado en 0 del cual comienza la extracción end: indice basado en 0 el cual indica el fin de la extracción
~~~
var miCadena = "mi perro tiene 23 años";
var chunk = miCadena.slice(1,5);
>> "i pe"
~~~

startsWith(stringToFind, [position])
- retorna true/false, realiza busqueda del string pasado como primer parametro desde la posicion indicada en el segundo parametro
~~~
var miCadena = "mi perro tiene 23 años";
miCadena.startsWith("mi", 3);
>> false
miCadena.startsWith("mi");
>> true
~~~

substring(start, [end])
- retorna un nuevo string, retorna un chunk de un string  exrtae caracteres desde el indice start hasta el inidce end, start: indica desde que posición crear/cortar el nuevo string. end: indica donde finaliza el nuevo string, si se omite el parametro end se extraera hasta el fin de la cadena
~~~
"datos conocidos por el periodico matutino".substring(6, 15)
>> "conocidos"
~~~

toLowerCase()
- retorna un nuevo string, devuelve el valor en minisculas de la cadena que hace el llamado
~~~
"mi PERRO parlanchin se LLAMA ñoño".toLowerCase()
 >> "mi perro parlanchin se llama ñoño"
~~~

toString()
- retorna un nuevo string, devuelve una cadena que representa al objeto que hace el llamado
~~~
var a = 101520;
a.toString();
>> "101520";
~~~

toUpperCase()
- retorna un nuevo string, devuelve el valor en mayusculas de la cadena que hace el llamado
~~~
"mi PERRO parlanchin se LLAMA ñoño".toUpperCase()
>> 'MI PERRO PARLANCHIN SE LLAMA ÑOÑO'
~~~
************************************************************************************************************************************
**MENOS UTILES**

String.fromCodePoint(num1, ...., numN);
- metodo estatico, retorna un nuevo string con la representacion de caracteres ingresados como parametros
~~~
String.fromCodePoint(65,66,67);
>> "ABC"
~~~

miCadena.anchor('nombre_anchor')
- metodo para crear un anchor a partir de un string
~~~
let miCadena = 'texto a visualizar'
miCadena.anchor('nombre_anchor_html');
>> <a name="nombre_anchor_html">texto a visualizar</a>
~~~

miCadena.big()
- metodo para formatear y obtener un texto dentro de una etiqueta big
~~~
let miCadena = 'texto a visualizar';
miCadena.big()
>> <big>texto a visualizar</big>
~~~

toLocaleLowerCase()
toLocaleLowerCase(locale)
toLocaleLowerCase([locale, locale])
- retorna un nuevo string el cual toma el string original y lo transforma en minusculas de acuerdo con la localización especificada
~~~
 "mi PERRO parlanchin se LLAMA ñoño".toLocaleLowerCase('en-US')
 >> "mi perro parlanchin se llama ñoño"
~~~

toLocaleUpperCase()
toLocaleUpperCase(locale)
toLocaleUpperCase([locale, locale, locale])
- retorna un nuevo string el cual toma el string original y lo transforma en mayusculas de acuerdo con la localización especificada
~~~
"mi PERRO parlanchin se LLAMA ñoño".toLocaleLowerCase('en-US')
 >> "MI PERRO PARLANCHIN SE LLAMA ÑOÑO"
~~~
