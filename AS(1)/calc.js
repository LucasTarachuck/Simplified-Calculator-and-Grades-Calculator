const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const resultado = document.getElementById('resultado')


function somar(){
    let soma = Number(n1.value) + Number(n2.value)
    resultado.innerText = `Resultado: ${soma}`
}
function subtrair(){
    let subtrair = Number(n1.value) - Number(n2.value)
    resultado.innerText = `Resultado: ${subtrair}`
}
function multi(){
    let multi = Number(n1.value) * Number(n2.value)
    resultado.innerText = `Resultado: ${multi}`
}
function div(){
    if(n2  > 0){
        let div = Number(n1.value) / Number(n2.value)
        resultado.innerText = `Resultado: ${div}`
        
    }
    else{
        alert('Não é possível dividir números por zero')
    }
}
    
function limpar(){
    n1.value = ''
    n2.value = ''
    resultado.innerText = `Resultado: ${''}`
}