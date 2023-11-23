const form = document.getElementById('form');
const campoB = document.getElementById('campoB');
const campoA = document.getElementById('campoA');

let validForm = false;

function validaCampoB(campoA, campoB) {
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);
    return campoB > campoA;
}

campoB.addEventListener('input', function(event) {
    console.log(event.target.value);
    validForm = validaCampoB(campoA.value, event.target.value);

    if (!validForm && campoA.value != '') {
        campoB.classList.add('invalid');
        document.querySelector('.invalid-message').style.display = 'block';
        document.querySelector('.valid-message').style.display = 'none';
        campoB.classList.remove('valid');
        document.querySelector('.success-message').style.display = 'none';
    } else if (campoA.value != ''){
        campoB.classList.add('valid');
        document.querySelector('.valid-message').style.display = 'block';
        document.querySelector('.invalid-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'none';
    }
});

campoA.addEventListener('input', function(event) {
    console.log(event.target.value);
    if (campoB.value != '') {
        validForm = validaCampoB(event.target.value, campoB.value);
    }

    if (!validForm && campoB.value != '') {
        campoB.classList.add('invalid');
        document.querySelector('.invalid-message').style.display = 'block';
        document.querySelector('.valid-message').style.display = 'none';
        campoB.classList.remove('valid');
        document.querySelector('.success-message').style.display = 'none';
    } else if (campoB.value != ''){
        campoB.classList.add('valid');
        document.querySelector('.valid-message').style.display = 'block';
        document.querySelector('.invalid-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'none';
    }
});

form.addEventListener('submit', function(event){
    event.preventDefault();

    const mensagemSucesso = `O segundo número: <b>${campoB.value}</b> é maior que o primeiro número: <b>${campoA.value}`;
    const mensagemErro = `O primeiro número: <b>${campoB.value}</b> <b>NÃO</b> é maior que o primeiro número: <b>${campoA.value}`;

    validForm = validaCampoB(campoA.value, campoB.value)
    
    if (validForm) {
        const containerMessagemSucesso = document.querySelector('.success-message');
        containerMessagemSucesso.innerHTML = mensagemSucesso;
        containerMessagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        document.querySelector('.valid-message').style.display = 'none';
        document.querySelector('.invalid-message').style.display = 'none';
        campoB.classList.remove('invalid');
        campoB.classList.remove('valid');
        document.querySelector('.error-message').style.display = 'none';

    } else {
        const containerMessagemErro = document.querySelector('.error-message');
        containerMessagemErro.innerHTML = mensagemErro;
        containerMessagemErro.style.display = 'block';

        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.valid-message').style.display = 'none';
        campoB.classList.remove('valid');
    }
});