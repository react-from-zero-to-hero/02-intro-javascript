// Funciones en JS
// function saludar( nombre ) {
//     return `Hola, ${ nombre }`;
// }

// saludar = 30;

// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar('Goku') );

console.log( saludar2 );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Alberth'
    }
}

const getUser2 = () => (
    {
        uid: 'ABC123',
        username: 'Alberth'
    }
);

const user = getUser();
console.log(user);
console.log(getUser2());

// TAREA
// 1. Transformen a una función de flecha
// 2. Retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => (
    {
        uid: 'ABC456',
        username: nombre
    }
); 

const usuarioActivo = getUsuarioActivo('Alberth');
console.log(usuarioActivo);
