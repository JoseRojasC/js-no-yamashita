function toggleBorder() {
    const imagen = document.getElementById('miImagen');
    imagen.classList.toggle('borde');

    const boton = document.getElementById('sig');
    boton.classList.add('active'); // Activa el botón
}