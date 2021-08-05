const link_api = 'https://api.themoviedb.org/3/movie/popular?api_key=c8f0e89c2a789ea8a93c6db654ac65d8&language=en-US&page=1';
const url_images = 'https://image.tmdb.org/t/p/w300';

const main = document.getElementById('main');

getPelicula(link_api);

function getPelicula(link) {
    fetch(link).then(res => res.json()).then(data => {
        showPeli(data.results);

    })
}


function showPeli(data) {
    main.innerHTML = '';
    data.forEach(peli => {
        const { tittle, poster_path, overview } = peli;
        const peliElement = document.createElement('div');
        peliElement.classList.add('pelicula');
        peliElement.innerHTML = `
        <img src="${url_images+poster_path}" alt="${tittle}">
        
            <div class="peli-info">
                <h3>${tittle}</h3>
                <span class="valor">1 a 5</span>
            </div>
            <div class="descripcion">
                <h3>Descripcion</h3>
                ${overview}
            
        </div>
        `

        main.appendChild(peliElement);

    });


}