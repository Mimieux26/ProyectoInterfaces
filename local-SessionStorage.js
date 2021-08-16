//Guardar setItem


function mostrarDatosLocals() {

    localStorage.setItem("valoracion", favoritos)
    var resultado = localStorage.getItem("value")
    console.log(resultado)
}