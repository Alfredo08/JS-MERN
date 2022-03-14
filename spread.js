
let nombres = [ 'Alex', 'Alan', 'Martha', 'Julieta' ];
let nombresCopia = [...nombres]; // Spread operator

/*
for( let i = 0; i < nombres.length; i ++ ){
    nombresCopia.push( nombres[i] );
}
*/

nombresCopia[0] = 'Alexander';
console.log( nombres );
console.log( nombresCopia );


let estudiante = {
    nombre : 'Alex',
    apellido : 'Martinez',
    edad : 25
};

let estudianteCopia = {
    ...estudiante,
    especialidad : 'Desarrollo Web',
    instructor : 'Martha Garcia'
};


console.log( estudiante );
console.log( estudianteCopia );



