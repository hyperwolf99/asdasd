// Función auxiliar para obtener un elemento del DOM por su id
function $(elemento) {
    return document.getElementById(elemento);
}

// Obtiene el formulario del DOM
const formulario = $('formulario');

// Agrega un evento de escucha para el evento de envío del formulario
formulario.addEventListener('submit', (e) => {
    // Obtiene los valores de peso y altura del formulario y los convierte a números
    let peso = +formulario['peso'].value;
    let altura = +formulario['altura'].value;

    // Calcula el índice de masa corporal (IMC) usando la fórmula: peso / (altura * altura)
    let IMC = peso / (altura * altura);

    // Muestra un mensaje de alerta con el IMC calculado
    alert(`El IMC es ${IMC}`);

    // Evita que el formulario se envíe y recargue la página
    e.preventDefault();
});

