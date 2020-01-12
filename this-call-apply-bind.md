# This, Call, Apply, Bind

## que es this ?
  es una palabra reservada en javascript

  hace referencia a un objeto, pero esta referencia puede variar implicitamente dependiendo si es un objeto global, un constructor o explicitamente dependiendo de los metodos bind, call, apply

### Implícitamente

  	contexto global
  	como un método dentro de un objeto
  	como constructor en una función o clase
  	como un manejador de eventos DOM

### GLOBAL
+ en browser hace referencia al objeto global window
+ en nodejs hace referencia al objeto global

en una funcion de nivel superior this seguira haciendo referencia a window aun cuando las funciones ofrecen un contexto para sus variables

  usando el modo stricto 'use strict'
  this dentro de una funcion hara referencia a undefined


### METODO

  un metodo es una funcion en un objeto o una accion que un objeto puede realizar
  un metodo usa this para referirse a las propiedades del objeto

  en un objeto anidado this hace referencia al objeto en el actual contexto de donde es llamado, otra forma de pensarlo es que this hace referencia al objeto del lado izquierdo del punto del metodo llamado

### FUNCION CONSTRUCTOR

  al utilizar la palabra reservada new se esta creando una instancia de una funcion constructora, en este contexto this hace referencia (o esta unido) a la instancia, que muy posiblemente sera una variable

### CLASE CONSTRUCTOR

  this en el constructor de una clase se comporta igual que al constructor de una funcion

### MANEJADOR DE EVENTOS DOM

  this hace referencia al elemento targeted

**CALL Y APPLY**

bind puede ser util para acceder a eventos de una clase dentro de otra clase

call y apply son muy similares ya que invocan una funcion con un contexto definido para this y argumentos opcionales

la unica diferencia es que call requiere los parametros uno por uno y apply los recibe en un array

  al usar call o apply, this se convierte en el objeto pasado como argumento

  en las funciones call y apply puedes pasar argumentos adicionales como parametros

  en call cada valor adicional que pasemos sera enviado como argumento
~~~
longerSummary.call(book, 'dystopian', 1932)
~~~
  en apply es necesario enviarlos como array
~~~
  longerSummary.apply(book, ['dystopian', 1932])
~~~
**se recomienda utilizar apply**


call y apply son metodos de uso unico, si llama la funcion con el contexto this lo tendra pero la funcion permanecera sin cambios

  bind a diferencia conserva el contexto de this en la funcion

### ARROW FUNCTION

estas funciones no enlazan su propio contexto por lo cual lo buscan en un nivel superior

## como usarlo
  https://dev.to/ahoy/messages/YBz8lHEgMf4auna4P5P1LZbcx6NBJQgo/click?signature=d9488843872bccb2474f5cb8e8f42f3f43d8d520&url=https%3A%2F%2Fdev.to%2Fdigitalocean%2Funderstanding-this-bind-call-and-apply-in-javascript-dla%3Futm_source%3Ddigest_mailer%26utm_medium%3Demail%26utm_campaign%3Ddigest_email

## cuando usarlo

  es util para entender el codigo en momento de análisis
