
let estudiante = {
    nombre : 'Alex',
    apellido : 'Martinez',
    edad : 25,
    especialidad : 'Desarrollo Web',
    instructor : 'Martha Garcia',
    calificaciones : [
        {
            stack : "Python",
            calificacion : 9.2
        },
        {
            stack : "Java",
            calificacion : 9.5
        }
    ]
};

let {calificaciones : [ stack1, stack2 ]} = estudiante;
let { nombre : nombreAlex } = estudiante;
console.log( nombreAlex, nombre );

/*
let edadAlex = estudiante.edad;
let nombreAlex = estudiante.nombre;
let apellidoAlex = estudiante.apellido;
let especialidadAlex = estudiante.especialidad;
let instructorAlex = estudiante.instructor;

let {nombre, apellido, edad, especialidad, instructor, calificaciones} = estudiante;

console.log( nombreAlex, apellidoAlex, edadAlex, especialidadAlex, instructorAlex );
console.log( nombre, apellido, edad, especialidad, instructor, calificaciones[0] );

let propiedad = 'nombre';

console.log( estudiante['nombre'] );
console.log( estudiante[propiedad] );
*/