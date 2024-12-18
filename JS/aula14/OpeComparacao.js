// Solicita dois números ao usuário
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

// Compara os números usando operadores de comparação
if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que ${numero2}.`);
} else if (numero1 < numero2) {
    console.log(`O número ${numero1} é menor que ${numero2}.`);
} else {
    console.log(`O número ${numero1} é igual ao ${numero2}.`);
}

// Operadores de comparação usados:
// > : maior que
// < : menor que
// === : igualdade estrita
