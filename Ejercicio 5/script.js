const formulario = $('formulario')
const resultado = $('resultado')

formulario.addEventListener('submit', (e)=>{
    let ladoA= +formulario['ladoA'].value
    let ladoB= +formulario['ladoB'].value
    let ladoC= +formulario['ladoC'].value
    if(ladoA > ladoC){
        let triangulo = (ladoB * (ladoA-ladoC))/2
        let rectangulo = (ladoB * ladoC)
        let area = rectangulo + triangulo
        resultado.innerText = "El area es: " + area
    }
    else{
        alert("El lado B debe ser menor al lado A")
    }
    e.preventDefault()
})

function $(elemento){
    return document.getElementById(elemento)
}