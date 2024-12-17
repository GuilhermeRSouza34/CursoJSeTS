const form = document.getElementById("imcform");            // Sekeciona o form pelo ID
const calcularBtn = document.getElementById("calcular");    // Seleciona o botao para calcular
const resultadoDiv = document.getElementById("resultado");  // Seleciona o elemento onde o resultado será exibido
const listaDados = document.getElementById("ListaDados");   // Seleciona o elemento para listar os dados salvos

let dadosUsuario = [];     // Array para armazenar os dados dos usuarios

calcularBtn.addEventListener("click", () => {   // Adiciona um evento de clique no botao "Calcular IMC"
    const nome = document.getElementById("nome").ariaValueMax.trim();
    const sobrenome = document.getElementById("sobrenome").ariaValueMax.trim();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!nome ||!sobrenome ||isNaN(peso) ||isNaN(altura)) {
        resultadoDiv.innerText = "Por favor, preencha todos os campos corretamente.";
        resultadoDiv.style.color = "red";   // Exibe mensagem de erro em vermelho
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);  // Calcula o IMC usando a formula

    let classificacao;  // Função para classficar o IMC com base no valor calculado
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    
})