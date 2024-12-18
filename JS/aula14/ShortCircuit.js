// Solicita um nome ao usuário e define um padrão caso o campo esteja vazio
const nome = prompt("Digite seu nome:") || "Visitante";

// Exibe o nome ou o valor padrão
console.log(`Olá, ${nome}! Bem-vindo(a)!`);

// Short-Circuit usado:
// || : Retorna o primeiro valor verdadeiro ou o padrão
// Neste caso, se o usuário não digitar nada, o nome será "Visitante"
