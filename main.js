var inputTexto = document.querySelector(".input-texto");
var mensagemTextArea = document.querySelector(".mensagem-textoarea");
var colarTextoCrypto = document.querySelector("#colarText");
var validaCriptogra = document.querySelector(".valida__texto__criptografar");
var validaDescriptogra = document.querySelector(".valida__texto__descriptografar");

var textoCrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function botaoCryptografar() {
    if(inputTexto.value.length == 0) {
        validaCriptogra.style.display = 'flex';

        return false;
    } else {
        validaCriptogra.style.display = 'none';
    }

    const textoCryptografado = cryptografaTexto(inputTexto.value);
    mensagemTextArea.innerHTML = textoCryptografado;
    inputTexto.value = '';
    ocultarImagem();
}  

function botaoDescryptografa() {
    if(inputTexto.value.length == 0) {
        validaDescriptogra.style.display = 'flex';

        return false;
    } else {
        validaDescriptogra.style.display = 'none';
    }

    const textoDescryptografado = descryptografaTexto(inputTexto.value);
    mensagemTextArea.innerHTML = textoDescryptografado;
    inputTexto.value = '';
    ocultarImagem();

    colarTextoCrypto.style.display = "none";
}

function ocultarImagem(validador) {
    var oculta = document.querySelector("#caixa-mensagem-nao-encontrada");
    var mostra = document.querySelector("#caixa-mensagem-texto-cripto");

    if(!validador) {
        mostra.style.display = "flex";
        oculta.style.display = "none";
        validador = true;

    } else {
        mostrar.style.display = "none";
        ocultar.style.display = "flex";
        validador = false;

    }
}

//Função para criptografa
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

//Função para descriptografar
function descryptografaTexto(stringDescripto) {

    stringDescripto = stringDescripto.toLowerCase();

    for(let i = 0; i < textoCrypt.length; i++) {
        if(stringDescripto.includes(textoCrypt[i][0])) {
            stringDescripto = stringDescripto.replaceAll(textoCrypt[i][1], textoCrypt[i][0]);
        }
    }

    return stringDescripto;
}

//Copiar
function botaoCopiar() {
    var textoAreaMensagem = mensagemTextArea.innerHTML;
    navigator.clipboard.writeText(textoAreaMensagem);

    alert("Texto copiado com sucesso!");

    colarTextoCrypto.style.display = "flex";
}

// botao colar
function botaoColar() {
    var textoAreaPrincipal = inputTexto.innerHTML;
    navigator.clipboard.readText().then((txt) => (inputTexto.value = txt));
}