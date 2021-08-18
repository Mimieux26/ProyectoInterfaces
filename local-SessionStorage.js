const url_imagesFav = 'https://image.tmdb.org/t/p/w500';

function guardarPeliculaPopu(id) {
    var peliculas = arrayPeliPopular.filter(pelicula => pelicula.id === id)
    var jsonPelicula = {}
    jsonPelicula.id = peliculas[0].id
    jsonPelicula.titulo=peliculas[0].title
    jsonPelicula.imagen=peliculas[0].poster_path
    jsonPelicula.descripcion=peliculas[0].overview
    localStorage.setItem(id, JSON.stringify(jsonPelicula))
    
}

function mostrarDatosLocals() {
    var peliculas = []
    for (var i = 0; i < localStorage.length; i++) {
        peliculas[i] = JSON.parse(localStorage.getItem(localStorage.key(i)))
    }
    return peliculas
    
}

var favPeli=(pelicula)=>`
        <img src="images/placeholder.jpg" data-src="${url_imagesFav+pelicula.imagen}" alt="${pelicula.titulo}" id="imagen">
        
            <div class="peli-info">
                    <h3>${pelicula.titulo}</h3>
                    <button id="like" onclick="">❤</button>
                    <button id="vermas" onclick="toggle(${pelicula.id})">Ver mas</button>
                
            </div>
            <div class="descripcion" id="${pelicula.id}">
                <div id="toggle" onclick="toggle(${pelicula.id})"></div>
                <h3>Descripcion</h3>
                ${pelicula.descripcion}

            
            </div>
        `

        


  











