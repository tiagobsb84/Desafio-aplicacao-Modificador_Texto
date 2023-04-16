var inputTexto = document.querySelector(".input-texto");
var mensagemTextArea = document.querySelector(".mensagem-textoarea");

var textoCrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function botaoCryptografar() {
    const textoCryptografado = cryptografaTexto(inputTexto.value);
    mensagemTextArea.value = textoCryptografado;
    inputTexto.value = '';
    ocultarImagem();
    apareceCaixaMensagem();
    console.log(textoCryptografado);
}  

function botaoDescryptografa() {
    const textoDescryptografado = descryptografaTexto(inputTexto.value);
    mensagemTextArea.value = textoDescryptografado;
    inputTexto.value = '';
    console.log(textoDescryptografado);
}

function ocultarImagem() {
    document.querySelector('.caixa-descricao').classList.add('hide');
}

function apareceCaixaMensagem() {
    document.querySelector('.caixa-mensagem-crypto').classList.toggle('caixa-mensagem-crypto');
}

function cryptografaTexto(stringCripto) {

    stringCripto = stringCripto.toLowerCase();

    for(let i = 0; i < textoCrypt.length; i++) {
        //Aqui está verificando se tem o primeiro elemento na posição i.
        if(stringCripto.includes(textoCrypt[i][0])) {
            stringCripto = stringCripto.replaceAll(textoCrypt[i][0], textoCrypt[i][1]);
        }
    }

    return stringCripto;
}

function descryptografaTexto(stringDescripto) {

    stringDescripto = stringDescripto.toLowerCase();

    for(let i = 0; i < textoCrypt.length; i++) {
        console.log(textoCrypt[i])
        if(stringDescripto.includes(textoCrypt[i][0])) {
            stringDescripto = stringDescripto.replaceAll(textoCrypt[i][1], textoCrypt[i][0]);
        }
    }

    return stringDescripto;
} 