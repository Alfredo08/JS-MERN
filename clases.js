
class Persona{
    constructor( nombre, apellido, edad ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    imprimeDatos(){
        console.log( this.nombre, this.apellido, this.edad );
    }

    getNombre(){
        return this.nombre;
    }
    
    setNombre( nuevoNombre ){
        this.nombre = nuevoNombre;
    }
}

class Estudiante extends Persona{
    constructor( nombre, apellido, edad, programa, instructor ){
        super( nombre, apellido, edad );
        this.programa = programa;
        this.instructor = instructor;
    }

    imprimeDatos(){
        super.imprimeDatos();
        console.log( this.programa, this.instructor );
    }
}

let alex = new Persona( 'Alex', 'Martinez', 25 );
let martha = new Persona( 'Martha', 'Garcia', 30 );
let alan = new Estudiante( 'Alan', 'Gomez', 24, 'Desarrollo Web', 'Alfredo Salazar' );

alex.imprimeDatos();
martha.imprimeDatos();
alan.imprimeDatos();