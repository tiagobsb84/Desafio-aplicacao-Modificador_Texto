var inputTexto = document.querySelector(".input-texto");

var mensagemTextArea = document.querySelector(".mensagem-textoarea");

function botaoCryptografar() {
    const textoCryptografado = cryptografaTexto(inputTexto.value);
    mensagemTextArea.value = textoCryptografado;

    console.log(textoCryptografado);
}
    

function cryptografaTexto(stringCripto) {
    let textoCrypt = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    stringCripto = stringCripto.toLowerCase();

    for(let i = 0; i < textoCrypt.length; i++) {
        //Aqui está verificando se tem o primeiro elemento na posição i.
        if(stringCripto.includes(textoCrypt[i][0])) {
            stringCripto = stringCripto.replaceAll(textoCrypt[i][0], textoCrypt[i][1]);
        }
    }

    return stringCripto;
}



/*var a = "abag";
var b = "bodi";
var c = "cord";*/

/*function ocultarImagem() {
    document.querySelector('.caixa-descricao').classList.add('hide');
}

var button = document.querySelector('.button-criptogra');

document.body.addEventListener('keyup', (event) => {
    var code = event.code;

    var strings = [];

    var texto = "";
    
        switch(code){
            case 'KeyA':
                var a = texto.replace("a", "ali");
                console.log(a.value);
                break;
            case 'KeyB':
                var b = texto.replace("b", "bas");
                console.log(b);
                break;
            case 'KeyC':
                var c = texto.replace("c", "casg");
                console.log(c);
                break;
        }

    
})*/

/*button.addEventListener('click', function (e) {
    if(e.code == '')
    e.preventDefault();
    var inputTexto = document.querySelector('.texto');
    var valor = inputTexto.value.toUpperCase();
    ocultarImagem();
    console.log(valor);
})*/
