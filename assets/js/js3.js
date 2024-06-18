document.getElementById('ingresar').addEventListener('click', function() {
    let numero1 = document.querySelector('#opcion1').value;
    let numero2 = document.querySelector('#opcion2').value;
    let numero3 = document.querySelector('#opcion3').value;

    let clave = numero1 + numero2 + numero3;

    let mensaje = document.getElementById('mensaje');

    if (clave === '911') {
        mensaje.innerHTML = 'El password 1 es correcto!';
        mensaje.style.color = '#1a1a1a'; // Negro
    } else if (clave === '714') {
        mensaje.innerHTML = 'El password 2 es correcto!';
        mensaje.style.color = '#1a1a1a'; // Negro
    } else {
        mensaje.innerHTML = 'El password es incorrecto, intenta nuevamente!';
        mensaje.style.color = '#ff0000'; // Rojo
    }
});