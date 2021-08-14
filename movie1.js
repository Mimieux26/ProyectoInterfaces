const link_api = 'https://api.themoviedb.org/3/movie/popular?api_key=c8f0e89c2a789ea8a93c6db654ac65d8&language=es&page=1';
const url_images = 'https://image.tmdb.org/t/p/w300';

const main = document.getElementById('section1');

getPelicula(link_api);

function getPelicula(link) {
    fetch(link).then(res => res.json()).then(data => {
        showPeli(data.results);

    })
}


function showPeli(data) {
    main.innerHTML = '<h1>Pel&iacute;culas Populares</h1>';
    data.forEach(peli => {
        const { title, poster_path, vote_average, overview } = peli;
        const peliElement = document.createElement('div');
        peliElement.classList.add('pelicula');
        peliElement.innerHTML += `
        <img src="${url_images+poster_path}" alt="${title}" id="imagen">
        
            <div class="peli-info">
                    <h3>${title}</h3>
                    <button id="fav"><img src="images/corazon1.png"></button>
                    <button id="vermas" onclick="vermasdesc()">Ver mas</button>
                
            </div>
            <div class="descripcion" id="desct">
                <div id="toggle" onclick="toggle()"></div>
                <h3>Descripcion</h3>
                ${overview}

            
            </div>
        `

        main.appendChild(peliElement);

    });


}

function vermasdesc(){
    let sec=document.getElementById('desct');
    sec.classList.value='descripcion active'

}
function toggle(){
    let desco=document.getElementById('desct');
    desco.classList.value='descripcion deactive'




}