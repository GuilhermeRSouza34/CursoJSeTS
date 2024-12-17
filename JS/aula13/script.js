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
})