// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () => {
    return ['ABC', 123];
};

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

// TAREA
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useeState = ( valor ) => {
    return [ valor, () => { console.log( 'Hola Mundo' )} ];
}

const [ nombre, setNombre ] = useeState( 'Goku' );
console.log( nombre );
setNombre();

