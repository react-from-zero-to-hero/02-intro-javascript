// giphy creado con cuenta de facebook

const api_key = 'LD6WloCo8MSzyHjFsJOXuLsM1bXaGhP9';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );
