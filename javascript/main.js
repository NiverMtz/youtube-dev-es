// Obtener los elementos de una clase (rt-list)
let boton = document.querySelectorAll('.rt-list');
let datos;

// Recorrerlos
boton.forEach(function(l){
    l.addEventListener('click', function(ev){
        // Agregar un evento click a cada uno de ellos
        ev.preventDefault();
        let content = document.querySelector('.content');
        content.classList.remove('animate__animated');
        content.classList.remove('animate__zoomInDown');

        content.classList.add('animate__animated');
        content.classList.add('animate__slideOutUp');

        setTimeout(function(){
            location.href = "../index.html";
        }, 1100);

        return false;
    });
});