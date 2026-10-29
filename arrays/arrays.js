// EJ 1. Playas favoritas
// Crear array
let playas = ["Chipiona", "Rota", "Matalascañas"];
console.table(playas);


//Crear + asignar por índice
let playas2 = [];
playas2[0] = "Chipiona";
playas2[1] = "Rota";
playas2[2] = "Matalascañas";
console.table(playas2);


//Crear + asignar/eliminar por método
let playas3 = [];
playas3.push("Chipiona");
playas3.push("Rota");
playas3.push("Matalascañas");
console.table(playas3);
playas3.pop(); //Quita el último
console.table(playas3);
playas3.shift(); //Quita el primero
console.table(playas3);

playas3.push("San Lúcar");
playas3.push("Mazagón");
playas3.push("Fuengirola");
playas3.push("Roquetas");
console.table(playas3);

playas3.splice(2, 1);  // Elimina empezando en 2 (posicion) y 1 (cantidad), elimina hacia arriba (ascendente)
console.table(playas3);

playas3[3] = "Playa de los muertos";
console.table(playas3);

//Convierte array en string usando el delimitador
let playas_string = playas3.join(", ");
console.log(playas_string);

//Convierte de string a array buscando el delimitador
let playas_array = playas_string.split(", ");
console.log(playas_array);


let nombre_playa = "Fuengirola";
console.log(`La posición de ${nombre_playa} es ${playas_array.indexOf(nombre_playa)}`);


//Playas ordenadas alfabéticamente
playas_array.sort();
console.table(playas_array);


//Ordenado al reves
playas_array.reverse();
console.table(playas_array);


//Rellenar arrays con elementos
let ejemplos_numeros = new Array(10);
ejemplos_numeros.fill(8);
console.log(ejemplos_numeros);