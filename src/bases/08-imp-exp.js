// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'; // imp
// import heroes, { owners } from './data/heroes';
// import { heroes, owners } from '../data/heroes';
import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id );
};
console.log( getHeroById(2) );

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
console.log( getHeroesByOwner('DC') );
