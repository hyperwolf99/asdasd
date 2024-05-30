const formulario = $('formulario')

formulario.addEventListener('submit', (e)=>{
    let peso = +formulario['peso'].value
    let altura = +formulario['altura'].value
    alert(`El IMC es ${peso/(altura*altura)}`)
    e.preventDefault()
})

function $(elemento){
    return document.getElementById(elemento)
}