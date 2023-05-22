// Obtener el elemento h1 con la clase topText
const topText = document.querySelector('.topText');

// Array con los textos que quieres mostrar
const textos = ['GASTOS DE ENVÍO GRATIS EN PEDIDOS DE HASTA 40 EUROS','MID SEASEON: AHORRA HASTA UN 50%','DEVOLUCIONES Y CAMBIOS'];

// Variable para llevar la cuenta del índice del texto actual
let currentIndex = 0;

// Función que cambia el texto en el elemento h1
function cambiarTexto() {
  // Agregar la clase "hide" para ocultar el texto
  topText.classList.add('hide');
  
  // Actualizar el texto después de 500 milisegundos
  setTimeout(() => {
    // Obtener el texto actual del array y asignarlo al elemento h1
    topText.textContent = textos[currentIndex];
    
    // Incrementar el índice para apuntar al siguiente texto
    currentIndex = (currentIndex + 1) % textos.length;
    
    // Quitar la clase "hide" para mostrar el nuevo texto
    topText.classList.remove('hide');
  }, 500);
}

// Mostrar el primer texto inmediatamente al cargar la página
cambiarTexto();

// Ejecutar la función cambiarTexto cada 3 segundos
setInterval(cambiarTexto, 3000);



let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('header').classList.remove('header--hidden');
  } else {
    document.querySelector('header').classList.add('header--hidden');
  }
  prevScrollpos = currentScrollPos;
}


const sizeCells = document.querySelectorAll('.size-cell');

sizeCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    // Remover clase 'selected' de todas las celdas
    sizeCells.forEach((cell) => {
      cell.classList.remove('selected');
    });

    // Agregar clase 'selected' a la celda clicada
    cell.classList.add('selected');
  });
});




