const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector('#rua');
const inputComplemento = document.querySelector('#complemento');
const inputBairro = document.querySelector('#bairro');
const inputUF = document.querySelector('#UF');
const BASE_URL = 'https://brasilapi.com.br/api'

//propriedade onkeyup é tudo minusculo//

inputCep.onkeyup = async(evento) => {
    //verificando sse o cep cumpriu 8 digitos
    //alert('Digitou alguma coisa');
    if (inputCep.value.length < 8) {
        return;
    }
    //fazendo uma requisição a api BRASILAPI para buscar asinformações com o cep digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
    });
    //extraindo json
    const conteudoResposta = await resposta.json();
    //atribuindo valors ao inputs
    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;

    console.log(conteudoResposta)
    alert("Cep completo: " + inputCep.value);
};



// const inputCep = document.querySelector("#cep");
// const BASE_URL = "https://brasilapi.com.br/api";

// inputCep.onkeyup = async(evento) => {
//     //verificando se o cep cumpriu os 8 digitos
//     if (inputCep.value.length < 8) {
//         return;
//     }
//     //fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado
//     const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
//         method: "GET",
//     });

//     console.log(resposta);
//     alert("Cep completo: " + inputCep.value);
// };