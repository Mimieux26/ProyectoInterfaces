const link_api = 'https://api.themoviedb.org/3/movie/popular?api_key=c8f0e89c2a789ea8a93c6db654ac65d8&language=es&page=1';
const url_images = 'https://image.tmdb.org/t/p/w300';
var arrayPeliPopular = []
const main = document.getElementById('section1');

getPelicula(link_api);

function getPelicula(link) {
    fetch(link).then(res => res.json()).then(data => {
        showPeli(data.results);
        arrayPeliPopular = data.results;
        
    })

}

function showPeli(data) {
    main.innerHTML = '<h1>Pel&iacute;culas Populares</h1>';
    data.forEach(peli => {
        const { title, poster_path, overview, id } = peli;

        const peliElement = document.createElement('div');
        peliElement.classList.add('pelicula');
        peliElement.innerHTML += `
        <img src="images/placeholder.jpg" data-src="${url_images+poster_path}" alt="${title}" id="imagen">
        
            <div class="peli-info">
                    <h3>${title}</h3>
                    <button id="fav" onclick="guardarPeliculaPopu(${id})">💖</button>
                    <button id="vermas" onclick="toggle(${id})">Ver mas</button>
                
            </div>
            <div class="descripcion" id="${id}">
                <div id="toggle" onclick="toggle(${id})"></div>
                <h3>Descripcion</h3>
                ${overview}

            
            </div>
        `

        main.appendChild(peliElement);
        

    });

}


function vermasdesc() {
    let sec = document.getElementsByClassName('descripcion');
    
    sec[0].classList.value = 'descripcion active';


    /*sec.classList.value='descripcion active'*/

}

function toggle(id) {
    let desco = document.getElementById(id);

    desco.classList.toggle('active')





}
