const link_api2= 'https://api.themoviedb.org/3/movie/upcoming?api_key=c8f0e89c2a789ea8a93c6db654ac65d8&language=es&page=1';
const url_images2= 'https://image.tmdb.org/t/p/w300';

const main2= document.getElementById('section2');

getPelicula2(link_api2);

function getPelicula2(link) {
    fetch(link).then(res => res.json()).then(data => {
        showPeli2(data.results);
    })
    
}


function showPeli2(data) {
    main2.innerHTML = '<h1>Proximas Pel&iacute;culas</h1>';
    data.forEach(peli => {
        const { title, poster_path,vote_average,overview } = peli;
        const peliElement2 = document.createElement('div');
        peliElement2.classList.add('pelicula');
        peliElement2.innerHTML += `
        <img src="images/placeholder.jpg" data-src="${url_images+poster_path}" alt="${title}" id="imagen">
        
            <div class="peli-info">
                <h3>${title}</h3>
                <span class="valor">${vote_average}</span>
            </div>
            <div class="descripcion">
                <h3>Descripcion</h3>
                ${overview}
            
        </div>
        `

        main2.appendChild(peliElement2);

    });
    IntersectionObs();

}