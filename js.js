const caixa_numero = document.querySelector("#numero");
const botao_adivinha = document.querySelector("#adivinhar");
const resp = document.querySelector("#resultado");

botao_adivinha.addEventListener('click', () => {
    const numero__digitado = Number.parseInt(caixa_numero.value);
    if(caixa_numero.value == '' || caixa_numero.value > 10 || caixa_numero.value < 2) {
        alert('[ERRO], Digite um número entre 10 e 2!');
    }else {

        let adivinha = 2 + Math.random() * (10-2);
        let numero_aleatorio = Math.ceil(adivinha);

        if(numero__digitado === numero_aleatorio) {
            resp.innerHTML = 'Parabéns! você acertou'
        }else {
            resp.innerHTML = `Errou! o numero era ${numero_aleatorio}`
        }
        caixa_numero.value = ''
    }
} )