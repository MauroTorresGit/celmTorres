/*// Array de imágenes que quieres mostrar
const imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];  // Añade más imágenes si es necesario

// Índice actual de la imagen
let indiceImagen = 0;

// Función para cambiar la imagen
function cambiarImagen() {
    // Obtener el elemento de la imagen por su ID
    const imagenElement = document.getElementById('patio');

    // Cambiar la fuente de la imagen
    imagenElement.src = imagenes[indiceImagen];

    // Incrementar el índice para la siguiente imagen
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}

// Establecer un intervalo para cambiar la imagen cada 5 segundos (5000 milisegundos)
setInterval(cambiarImagen, 5000);*/

alert("Bienvenido a la web del centro de estudiantes Lorenzo Massa");