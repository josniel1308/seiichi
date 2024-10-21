const imagenCompleta = document.getElementById("imagenCompleta")
const imagen = document.getElementById("imagen")
const imagenIzquierda = document.getElementById("izquierdaImagen")
const imagenDerecha = document.getElementById("derechaImagen")
const imagenCerrar = document.getElementById("cerrarImagen")
const imagenLista = [...document.querySelectorAll(".imagen")]


let indice = 0
imagenLista.forEach((elemento, i)=>{
    elemento.addEventListener("click", (e)=>{
        darclick(i)
        imagenCompleta.style.display="flex"
        imagen.src = elemento.src
    })
});
function darclick(posicion)
{
    indice = posicion
    imagen.src = imagenLista[indice].src
}
imagenCerrar.addEventListener("click", (e) => {
    imagenCompleta.style.display = "none"
})
imagenDerecha.addEventListener("click", (e) => {
    if (indice == imagenLista.length - 1)
        indice = - 1
    indice++
    imagen.src = imagenLista[indice].src
})
imagenIzquierda.addEventListener("click", (e) => {
    if (indice == 0)
        indice = imagenLista.length
    indice --
    imagen.src = imagenLista[indice].src
    
})
imagenCompleta.addEventListener("click", (e) => {
     if (e.target.classList.contains("imagenGrande"))
        imagenCompleta.style.display = "none"
})
