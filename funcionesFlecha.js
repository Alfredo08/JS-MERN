
function suma( num1, num2 ){
    return num1 + num2;
}

let sumaFlecha = ( num1, num2 ) => {
    let result = num1 + num2;
    return result;
}

let imprimeNombre = nombre => console.log( nombre );

let resultado = suma( 20, 50 );
console.log( resultado );

let resultadoFlecha = sumaFlecha( 20, 50 );
console.log( resultadoFlecha );

imprimeNombre( "Alex" );


let numeros = [10, 20, 30, 40, 50];

numeros.forEach( num => console.log( num + 5 ) );

/*
fetch( URL, configuracion )
    .then( response => {
        // Logica cuando llega una respuesta por parte de un API
    })
    .then( datos => {
        // Logica para manipular el objeto JSON recibido
    })
    .catch( error => {
        // Que hacer en caso de un error
    });
*/

let estudiante = {
    nombre : 'Alex',
    apellido : 'Martinez',
    edad : 25,
    imprimeInformacion : () => {
        console.log( this.nombre, this.apellido, this.edad );
    }
}

estudiante.imprimeInformacion();