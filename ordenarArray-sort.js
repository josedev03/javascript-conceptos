// Ordenar elementos en un array
// Lo primero a saber es que ordena alfabeticamente por la primera posicion de ambos elementos
// no funciona bien por si solo con los numeros, es necesario pasar como parametro una funcion

// Sort recibe una funcion como parametro, la cual cumple con 
// Esta función recibe dos valores a comparar y como resultado debe:

// devolver un valor positivo (1) si e primer valor es superior al segundo
// devolver un valor negativo (-1) si e primer valor es inferior al segundo
// devolver un valor cero (0) si los dos valores son iguales o equivalentes para la ordenación.


console.log([80, 9, 100].sort((a, b) => a - b));
// [ 9, 80, 100 ]

const data = [ "Zaragoza", "madrid", "Barcelona" ];
data.sort ((a, b) =>
  a.toLowerCase() > b.toLowerCase() ? 1 :
  a.toLowerCase() < b.toLowerCase() ? -1:
  0
);
console.log (data);
// [ 'Barcelona', 'madrid', 'Zaragoza' ]


// CONCLUSION
// números: (a, b) => a – b
// cadenas: (a, b) => a.localeCompare(b)
