// Función asíncrona para obtener datos de usuarios
async function datos() {
    // Realiza una solicitud fetch para obtener los usuarios
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const personas = await res.json()
    const container = $("contenedor")

    // Itera sobre cada objeto persona en el array de personas
    personas.forEach(persona => {
        // Crea un contenedor para cada usuario
        const contenedor1 = document.createElement("div")
        // Crea elementos de párrafo para mostrar los datos de la persona
        const itemNombre = document.createElement("p")
        const itemId = document.createElement("p")
        const itemUsuario = document.createElement("p")
        const itemEmail = document.createElement("p")
        const itemWebsite = document.createElement("p")

        // Asigna un id al div contenedor de cada persona
        contenedor1.id = "contenedorPersonas"
        // Asigna el texto correspondiente a cada párrafo
        itemId.textContent = `Id: ${persona.id}`
        itemNombre.textContent = `Nombre: ${persona.name}`
        itemUsuario.textContent = `Usuario: ${persona.username}`
        itemEmail.textContent = `Email: ${persona.email}`
        itemWebsite.textContent = `Wedsite: ${persona.website}`

        // Añade los párrafos al div contenedor de la persona
        contenedor1.appendChild(itemId)
        contenedor1.appendChild(itemNombre)
        contenedor1.appendChild(itemUsuario)
        contenedor1.appendChild(itemEmail)
        contenedor1.appendChild(itemWebsite)

        // Añade el div contenedor de la persona al contenedor principal
        container.appendChild(contenedor1)

        // Crea un botón para ver las tareas del usuario
        const botonTareas = document.createElement("button")
        botonTareas.textContent = "Ver Tareas"
        botonTareas.id = "botonTareas"
        // Añade el botón al div contenedor de la persona
        contenedor1.appendChild(botonTareas)

        // Añade nuevamente el div contenedor de la persona al contenedor principal
        container.appendChild(contenedor1)

        // Añade un evento click al botón de tareas
        botonTareas.addEventListener("click", async () => {
            // Realiza una petición para obtener las tareas del usuario
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
            // Convierte la respuesta a formato JSON
            const tareas = await res.json()

            // Itera sobre cada tarea y la añade al div contenedor de la persona
            tareas.forEach(tarea => {
                const itemTarea = document.createElement("p")
                itemTarea.textContent = `Tarea:${tarea.id}-${tarea.title}`
                // Cambia el color del texto según si la tarea está completada o no
                if (tarea.completed == true) {
                    itemTarea.style.color = "green"
                } else {
                    itemTarea.style.color = "red"
                }
                // Desactiva el botón para evitar múltiples clics
                botonTareas.disabled = true
                // Añade la tarea al div contenedor de la persona
                contenedor1.appendChild(itemTarea)
            })
        })
    });

}
// Llama a la función datos para que se ejecute
datos()

function $(elemento) {
    return document.getElementById(elemento)
}