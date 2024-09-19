/*const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace

    const seccion = document.getElementById(enlace.hash.substring(1));
    seccion.classList.toggle('oculto');
  });
}); */

const enlaces = document.querySelectorAll('nav a');
let seccionActual = null;

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();

    const nuevaSeccion = document.getElementById(enlace.hash.substring(1));

    // Oculta la sección actual si es diferente de la nueva
    if (seccionActual && seccionActual !== nuevaSeccion) {
      seccionActual.classList.add('oculto');
    }

    // Muestra la nueva sección y actualiza la sección actual
    nuevaSeccion.classList.remove('oculto');
    seccionActual = nuevaSeccion;
  });
});