const form = document.getElementById('form-calculo');

function validarFormulario(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

const valorA = document.getElementById('numeroA').value;
const valorB = document.getElementById('numeroB').value;
const menssagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;


    formvalid = validarFormulario(valorA, valorB)
    if (formvalid) {
        alert(menssagemSucesso);

        valorA.value = '';
        valorB.value = '';

    } else if (valorB == valorA) {
        alert('Não é valido pois B é igual A!');
    } else {
        alert('Não é válido pois A é maior que B!');
    }
})

console.log(form);