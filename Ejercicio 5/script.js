// Obtiene el formulario del DOM
const formulario = $('formulario')
// Obtiene el elemento de resultado del DOM
const resultado = $('resultado')

formulario.addEventListener('submit', (e)=>{

    // Obtiene los valores de los lados del triángulo del formulario y los convierte a números
    let ladoA= +formulario['ladoA'].value
    let ladoB= +formulario['ladoB'].value
    let ladoC= +formulario['ladoC'].value

    // Verifica si el ladoA es mayor que ladoC
    if(ladoA > ladoC){
        // Calcula el área del triángulo y el área del rectángulo
        let triangulo = (ladoB * (ladoA-ladoC))/2
        let rectangulo = (ladoB * ladoC)
        // Calcula el área total sumando el área del triángulo y del rectángulo
        let area = rectangulo + triangulo
        // Muestra el resultado en el elemento de resultado
        resultado.innerText = "El area es: " + area
    }
    else{
        // Si ladoA no es mayor que ladoC, muestra una alerta
        alert("El lado B debe ser menor al lado A")
    }
    e.preventDefault()
})

function $(elemento){
    return document.getElementById(elemento)
}