const persona = {
    nombre: 'Alberh',
    apellido: 'Condori',
    edad: 23,
    direccion: {
        ciudad: 'New York',
        zip: 12345678,
        lat: 14.12345,
        lng: 34.43560
    }
};

// console.table( persona );
// console.log( { persona: persona } );
// console.log( { persona } );
console.log( persona );


const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );
