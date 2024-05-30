// Función auxiliar para obtener un elemento del DOM por su id
function $(elemento) {
    return document.getElementById(elemento)
}

// Obtiene el formulario del DOM
const formulario = $("formulario")

// Agrega un evento de escucha para el evento de envío del formulario
formulario.addEventListener("submit", (e) => {

    // Verifica si el campo de nombre está vacío
    if (formulario.nombre.value === "") {
        mensaje.textContent = "El nombre no puede estar vacio"
        mensaje.style.color = "red"

    // Verifica si el nombre tiene más de 50 caracteres
    } else if (formulario.nombre.value.length > 50) {
        mensaje.textContent = "El nombre debe tener menos de 50 caracteres"
        mensaje.style.color = "red"

    // Verifica si el campo de apellido está vacío
    } else if (formulario.apellido.value === "") {
        mensaje.textContent = "El apellido no puede estar vacio"
        mensaje.style.color = "red"

    // Verifica si el apellido tiene más de 50 caracteres
    } else if (formulario.apellido.value.length > 50) {
        mensaje.textContent = "El apellido debe ser menor de 50 caracteres"
        mensaje.style.color = "red"

    // Verifica si el campo de edad está vacío
    } else if (formulario.edad.value === "") {
        mensaje.textContent = "La edad esta vacia"
        mensaje.style.color = "red"

    // Verifica si la edad es menor de 18 años
    } else if (formulario.edad.value < 18) {
        mensaje.textContent = "La edad debe ser mayor a 18 años"
        mensaje.style.color = "red"

    // Verifica si el campo de altura está vacío
    } else if (formulario.altura.value === "") {
        mensaje.textContent = "La altura esta vacia"
        mensaje.style.color = "red"

    // Verifica si la altura es mayor a 230 cm
    } else if (formulario.altura.value > 230) {
        mensaje.textContent = "La Altura deber ser menor a 230 cm"
        mensaje.style.color = "red"

    // Verifica si el campo de email está vacío
    } else if (formulario.email.value === "") {
        mensaje.textContent = "El email debe ser completado"
        mensaje.style.color = "red"

    // Verifica si el email contiene el símbolo @
    } else if (!formulario.email.value.includes("@")) {
        mensaje.textContent = "EL mail debe contener @"
        mensaje.style.color = "red"
    }

    // Si todas las validaciones pasan, muestra un mensaje de éxito
    else {
        mensaje.textContent = "Todos los campos estan completos"
        mensaje.style.color = "green"
    }

    // Evita que el formulario se envíe y recargue la página
    e.preventDefault()

})