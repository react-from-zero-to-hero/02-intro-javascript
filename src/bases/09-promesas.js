import { getHeroById } from './bases/08-imp-exp';
// Las promesas son asincronas
// primero se ejecuta de lo que es sincrono y luego se ejecuta
// las tareas asincronas


// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // console.log('2 segundos despues');
//         // Tareas
//         // importarr el
//         const heroe = getHeroById(2);
//         // console.log(heroe);
//         resolve( heroe );
//     }, 2000);
// });

// promesa.then(  (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch ( err => console.warn(err) );


const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroById(id);
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el heroe' );
            }
        }, 2000 );
    });
};

// getHeroByIdAsync(1)
//     .then( heroe => console.log('Heroe', heroe))
//     .catch( err => console.warn(err) );

getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );