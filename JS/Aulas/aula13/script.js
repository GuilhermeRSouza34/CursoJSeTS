// Seleção de elementos do DOM
const form = document.getElementById("imcform");            // Seleciona o formulário pelo ID
const calcularBtn = document.getElementById("calcular");    // Seleciona o botão para calcular
const resultadoDiv = document.getElementById("resultado");  // Seleciona o elemento onde o resultado será exibido
const listaDados = document.getElementById("listaDados");   // Seleciona o elemento para listar os dados salvos

let dadosUsuario = [];     // Array para armazenar os dados dos usuários

// Adiciona um evento de clique ao botão "Calcular IMC"
calcularBtn.addEventListener("click", () => {
    // Captura os valores dos campos do formulário
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validação dos campos
    if (!nome || !sobrenome || isNaN(peso) || isNaN(altura)) {
        resultadoDiv.innerText = "Por favor, preencha todos os campos corretamente.";
        resultadoDiv.style.color = "red";   // Mensagem de erro em vermelho
        return;
    }

    // Calcula o IMC
    const imc = (peso / (altura * altura)).toFixed(2);  // Fórmula: peso / (altura²)

    // Classifica o IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Exibe o resultado no elemento de resultado
    resultadoDiv.textContent = `IMC de ${nome} ${sobrenome}: ${imc} (${classificacao})`;
    resultadoDiv.style.color = "green"; // Exibe o resultado em verde

    // Cria um objeto com os dados do usuário
    const dados = { nome, sobrenome, peso, altura, imc, classificacao };

    // Adiciona o novo objeto ao array de dados
    dadosUsuario.push(dados);

    // Atualiza a lista de dados salvos
    atualizarLista();
});

// Função para atualizar a lista de dados salvos
function atualizarLista() {
    listaDados.innerHTML = "";  // Limpa a lista antes de adicionar novos dados

    // Adiciona cada usuário na lista
    dadosUsuario.forEach((dados) => {
        const li = document.createElement("li");  // Cria um item da lista
        li.textContent = `${dados.nome} ${dados.sobrenome}: IMC: ${dados.imc} (${dados.classificacao})`;
        listaDados.appendChild(li);  // Adiciona o item à lista
    });
}
