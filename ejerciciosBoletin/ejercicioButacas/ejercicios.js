// EJ 6. Crea un array multidimensional que represente las 
// butacas de un teatro con 10 filas y 15 columnas. Realiza un 
// algoritmo que de forma aleatoria ocupe (1) cinco asientos 
// dejando el resto de butacas sin ocupar (0). Finalmente muestra
//  las butacas ocupadas. Si el algoritmo coincide en ocupar una
//  butaca que ya anteriormente estaba ocupada realiza otro 
// intento.
function ej6() {
    const teatro = new Array(10);

    for(let i=0; i<teatro.length; i++) {
        teatro[i] = new  Array(15).fill(0);
    }

    let contador = 0;

    do {

        const randomFilas = Math.floor(Math.random() * 10);
        const randomColumnas = Math.floor(Math.random() * 15);

        if(teatro[randomFilas][randomColumnas] === 0) {

            teatro[randomFilas][randomColumnas] = 1;
            console.log(`La butaca ${randomColumnas+1} de la fila ${randomFilas+1} ahora está ocupada.\n`);
            contador++;
        }
        
    }while(contador < 5)

    console.table(teatro);

    const sala = document.getElementById("sala"); //Obtiene la sala

    for(fila of teatro) {

        for(butaca of fila) {

            const asiento = document.createElement("div"); //Crea la butaca
            asiento.classList.add("butaca"); //Añade la clase css butaca

            if(butaca === 1) {
                asiento.classList.add("ocupada"); //Añade la clase css ocupada
            }

            sala.appendChild(asiento); //Añade la butaca creada a la sala

        }


    }
    
}
ej6();

function reserva_mano() {

    let fila = window.prompt("Introduce la fila:");
    let columna = window.prompt("Introduce la columna:");

    teatro[fila][columna] = 1;

}
