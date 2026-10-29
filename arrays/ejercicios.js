//EJ 2. Realiza un array que almacene las notas de diez alumnos
//de clase. Pinta la menor y la mayor.
function ej2() {
    let notas = new Array(10);
    let notaMayor = -Infinity;
    let notaMenor = Infinity;

    for(let i=0; i<=notas.length-1; i++) {

        notas[i] = (Math.random()*10).toFixed(2);

        // if(notas[i] > notaMayor) {
        //     notaMayor = notas[i];
        // }else if(notas[i] < notaMenor) {
        //     notaMenor = notas[i];
        // }

        // notaMayor = notas[i] > notaMayor ? notas[i] : notaMayor;
        // notaMenor = notas[i] < notaMenor ? notas[i] : notaMenor;

    }

    console.table(notas);
    console.log(`Nota más alta: ${Math.max(...notas)}\n`
        + `Nota más baja: ${Math.min(...notas)}\n`
    );

}
//ej2();


//EJ 3. Introduce el número de alumnos de clase.
//Almacena en el array edades todas las edades 
// (introducidas por prompt) y muestra la media,
//máxima y mínima de todas ellas.
function ej3() {

    numeroAlumnos = parseInt(window.prompt("Introduce el número de alumnos:"));
    edades = new Array(numeroAlumnos);

    acumulador = 0;

    for(let i = 0; i < edades.length; i++) {
        edades[i] = (parseInt(window.prompt(`Introduce la ${i+1} edad:`)));
        acumulador += edades[i];
    }

    console.table(edades);

    console.log(`Media de las edades: ${acumulador/edades.length}\n`
        + `Máxima de las edades: ${Math.max(...edades)}\n`
        + `Mínima de las edades: ${Math.min(...edades)}\n`
    );

}
//ej3();


//EJ 3. Realiza un array que almacene las edades de todos los 
// compañeros de clase. Pinta la media ignorando a los que 
// son menores de 18 y mayores de 50.
function ej3p2() {

    const edades = [20, 17, 21, 53, 50, 30, 25, 28, 22, 26, 16];

    let acumulador = 0;
    let contador = 0;

    for(edad of edades) {

        if(edad > 18 && edad < 50) {
            acumulador += edad;
            contador++;
        }
        
    }

    console.log(`La edad media es: ${Math.floor(acumulador/contador)}`);

}
//ej3p2();


//EJ 4. Eliminar el color verde de un array que almacena 
// cinco colores cualesquiera, entre ellos debe estar el verde.
function ej4() {
    const colores = ["Rojo", "Azul", "Verde", "Gris", "Morado"];
    console.table(colores);

    for(let i=0; i < colores.length; i++) {
        if(colores[i] === "Verde") {
            colores.splice(i, 1);
        }

    }

    console.table(colores);

}
//ej4();

function ej4p2() {

    const colores = ["Rojo", "Azul", "Verde", "Gris", "Morado"];
    console.table(colores);

    colores.splice(colores.indexOf("Verde"), 1);
    
    console.table(colores);

}
//ej4p2();


//EJ 5. Supon un array ordenado alfabéticamente de frutas. 
// (Aguacate, Banana, Chirimoya, Dátil, Fresa, Guayaba, Kiwi, 
// Limón, Naranja, Pera, Sandía, Uva, Yuca). Introduce el 
// melón de forma que el orden se mantenga usando splice.
function ej5() {
    const frutas = ["Aguacate", "Banana", "Chirimoya", "Dátil", 
        "Fresa", "Guayaba", "Kiwi", "Limón", "Naranja", "Pera", 
        "Sandía", "Uva", "Yuca"];

    frutas.push("Melón");
    frutas.sort();
    console.table(frutas);

}
//ej5();


// EJ 6. Supon un array ordenado alfabéticamente de frutas. 
// (Aguacate, Banana, Chirimoya, Dátil, Fresa, Guayaba, Kiwi, 
// Limón, Naranja, Pera, Sandía, Uva, Yuca). Introduce el 
// melón de forma que el orden se mantenga usando splice.