//Guardar setItem


function mostrarDatosLocals() {

    localStorage.setItem("fav", fav)
    var resultado = localStorage.getItem("fav")
    console.log(resultado)
}