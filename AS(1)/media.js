const ap1 = document.getElementById('ap1')
const ap2 = document.getElementById('ap2')
const as = document.getElementById('as')
const mfinal = document.getElementById('mfinal')

function validarAP1() {
    const ap1 = document.getElementById('ap1').value;
    if (ap1 < 0 || ap1 > 1.5) {
        alert('Nota da AP1 deve estar entre 0 e 1.5');
        document.getElementById('ap1').value = '';
    }
}
function validarAP2() {
    const ap2 = document.getElementById('ap2').value;
    if (ap2 < 0 || ap2 > 2.5) {
        alert('Nota da AP2 deve estar entre 0 e 2.5');
        document.getElementById('ap2').value = '';
    }
}
function validarAS() {
    const as = document.getElementById('as').value;
    if (as < 0 || as > 6) {
        alert('Nota da AP1 deve estar entre 0 e 6');
        document.getElementById('as').value = '';
    }
}
function media(){
    let media = Number(ap1.value) + Number(ap2.value) + Number(as.value)
    if(media < 6){
        mfinal.innerText = `Nota: ${media}. Infelizmente você foi reprovado`
    }
    if(media >= 6){
        mfinal.innerText = `Nota: ${media}. Parabéns, você foi aprovado`
    }
}
