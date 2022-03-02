// async - await

const getImage = async () => {
    try {
        const api_key = 'LD6WloCo8MSzyHjFsJOXuLsM1bXaGhP9';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        console.log('in async ', url, typeof(url) );
        return url;
    } catch (err) {
        console.err( err );
    }
    
}

const img = document.createElement('img');
console.log( getImage() );
getImage().then( res => img.src = res );
document.body.append( img );
