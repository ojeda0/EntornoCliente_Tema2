class Alumno {

    constructor(nombre, apellidos, fecha_nac, localidad, sexo, nota_media) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_nac = fecha_nac;
        this.localidad = localidad;
        this.sexo = sexo;
        this.nota_media = nota_media;

    }

    toString() {

        return `Nombre: ${this.nombre} ${this.apellidos}, 
        Fecha de nacimiento: ${this.fecha_nac}, 
        Localidad: ${this.localidad}, 
        Sexo: ${this.sexo},
        Nota media: ${this.nota_media}`;

    }

}

const a1 = new Alumno("Paco", "Díaz Jiménez", "12-12-2000", "Mairena del Alcor", "Hombre", 4);
const a2 = new Alumno("Susana", "López Santos", "08-02-2004", "Viso del Alcor", "Mujer", 9.2);
const a3 = new Alumno("Carlos", "García Pérez", "15-06-2002", "Sevilla", "Hombre", 7.5);
const a4 = new Alumno("María", "Fernández Ruiz", "23-09-2003", "Alcalá de Guadaíra", "Mujer", 8.6);
const a5 = new Alumno("Antonio", "Martínez Romero", "04-03-2001", "Carmona", "Hombre", 3.2);
const a6 = new Alumno("Lucía", "Sánchez Moreno", "19-11-2004", "Dos Hermanas", "Mujer", 9.5);
const a7 = new Alumno("David", "Torres Castillo", "30-01-2002", "Coria del Río", "Hombre", 7.8);
const a8 = new Alumno("Elena", "Navarro Díaz", "11-07-2003", "Utrera", "Mujer", 8.9);
const a9 = new Alumno("Javier", "Romero Flores", "27-05-2000", "La Rinconada", "Hombre", 6.5);
const a10 = new Alumno("Carmen", "Jiménez Vega", "06-12-2004", "Mairena del Aljarafe", "Mujer", 9.7);
const a11 = new Alumno("Manuel", "Ortega Molina", "14-04-2001", "Écija", "Hombre", 7.2);
const a12 = new Alumno("Paula", "Castro Herrera", "21-08-2002", "Lebrija", "Mujer", 1.4);
const a13 = new Alumno("Sergio", "Delgado Reyes", "09-10-2003", "Marchena", "Hombre", 5.9);
const a14 = new Alumno("Laura", "Méndez Gil", "17-02-2004", "Osuna", "Mujer", 9.1);
const a15 = new Alumno("Álvaro", "Vázquez León", "25-06-2000", "Arahal", "Hombre", 7.7);
const a16 = new Alumno("Marta", "Cabrera Ortiz", "03-09-2002", "Bormujos", "Mujer", 4.4);
const a17 = new Alumno("Adrián", "Flores Medina", "12-01-2003", "Camas", "Hombre", 5);
const a18 = new Alumno("Nuria", "Reyes Aguilar", "28-07-2001", "San Juan de Aznalfarache", "Mujer", 9.4);
const a19 = new Alumno("Daniel", "Morales Cruz", "16-05-2004", "Tomares", "Hombre", 7.9);
const a20 = new Alumno("Irene", "Herrera Domínguez", "22-03-2002", "Gelves", "Mujer", 4.9);

let alumnos = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20];

const cuerpo = document.getElementById("cuerpo");

function imprimir_tabla() {

        alumnos.forEach(alumno => {

        const tr = document.createElement("tr");
        cuerpo.appendChild(tr);

        Object.values(alumno).forEach(dato => {

            const td = document.createElement("td");
            td.textContent = dato;

            tr.appendChild(td);

        });

    });
}
imprimir_tabla();

function vaciar_tabla() {
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.textContent = "";
}

function imprimir_alumnos() {

    alumnos.forEach(alumno => console.log(alumno.toString()));

}

function imprimir_aprobados() {

    alumnos
        .filter(alumno => alumno.nota_media >= 5)
        .forEach(alumno => console.log(alumno.toString()));

}

function calcula_nota_media() {

    const total = alumnos
        .map(alumno => alumno.nota_media)
        .reduce((total, nota) => total + nota);

    console.log(`La nota media es:
        ${(total/alumnos.length).toFixed(2)}`);

}

function muestra_mejor_expediente() {

    const mejor = alumnos.reduce((mejor, alumno) => alumno.nota_media > mejor.nota_media ? alumno : mejor);

    console.log(`El mejor alumno es:
        ${mejor.toString()}`);

}

function mostrar_iniciales() {

    alumnos
        .map(alumno => alumno.nombre.charAt(0) + alumno.apellidos.charAt(0))
        .forEach(inicial => console.log(inicial));

}

function buscar_localidad() {
    //Solicita localidad
    let localidad = window.prompt("Introduce una localidad:");

    if(localidad) {
        localidad = localidad.toUpperCase().trim();
    }

    //Busca las coincidencias de dicha localidad
    alumnos = alumnos.filter(alumno => alumno.localidad.toUpperCase().trim() === localidad);

    vaciar_tabla();
    imprimir_tabla();

}