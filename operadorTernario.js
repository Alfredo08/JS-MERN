
let resultado;
let calificacion = 5.0;

if( calificacion >= 8.0 ){
    resultado = "Aprobaste el curso!";
}
else{
    resultado = "Hay que retomar el curso.";
}

//console.log( resultado );

let resultadoTernario = ( calificacion >= 8.0 ) ? "Aprobaste el curso!" : (calificacion == 5.0) ? "Obtuviste la mitad" : "Por mejorar";

if( calificacion >= 8.0 ){
    resultado = "Aprobaste el curso!";
}
else {
    if(calificacion == 5.0){
        resultado = "Obtuviste la mitad"
    }   
    else{
        resultado = "Por mejorar";
    }
}


console.log( resultadoTernario );
console.log( resultado );