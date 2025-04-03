// Solicita a idade do usuário
const idade = parseInt(prompt("Digite sua idade:"));
const temConvite = prompt("Você tem convite? (sim/não)").toLowerCase() === "sim";

// Verifica as condições de entrada usando operadores lógicos
if (idade >= 18 && temConvite) {
    console.log("Bem-vindo ao evento!");
} else {
    console.log("Desculpe, você não pode entrar.");
}

// Operadores lógicos usados:
// && : E lógico (todas as condições devem ser verdadeiras)
// || : OU lógico (pelo menos uma condição deve ser verdadeira)
// ! : NÃO lógico (inverte o valor de verdadeiro para falso e vice-versa)
