const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricao = document.getElementById('descricao');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> na conta - <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMessagemSucesso = document.querySelector('.success-message');
        containerMessagemSucesso.innerHTML = mensagemSucesso;
        containerMessagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        descricao.value = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    formValido = validaNome(event.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});