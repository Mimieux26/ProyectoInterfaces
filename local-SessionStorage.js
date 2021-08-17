function guardarPeliculaPopu(id, valoracion) {
    var peliculas = arrayPeliPopular.filter(pelicula => pelicula.id === id)
    var jsonPelicula = {}
    jsonPelicula.id = peliculas[0].id
    jsonPelicula.valoracion = valoracion
    localStorage.setItem(id, JSON.stringify(jsonPelicula))
}

function mostrarDatosLocals() {
    var peliculas = []
    for (var i = 0; i < localStorage.length; i++) {
        peliculas[i] = JSON.parse(localStorage.getItem(localStorage.key(i)))
    }
    return peliculas
}