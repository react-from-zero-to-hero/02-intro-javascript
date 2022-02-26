// Desestructuración
// Asignación dessestructurante
const persona = {
    nombre: 'Alberth',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;
console.log( nombre, edad, clave );

const { nombre:nombre2 } = persona;
console.log( nombre2 );

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// no importa el orden

const useeContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12345,
            lng: -12.3456
        }
    }
}

const avenger = useeContext( persona );
const { nombreClave, anios, latlng:{ lat, lng } } = avenger;
console.log( nombreClave, anios );
console.log( lat, lng )
