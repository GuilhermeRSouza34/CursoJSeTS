const nome = 'Guilherme'; //string
const nome1 = "Guilherme"; //string
const nome2 = 'Guilherme'; //string
const num1 = 10; //number
const num2 = 33.21; //number
let nomeAluno; //undefined -> não aponta para local nenhum na memoria
const SobrenomeAluno = null; //Nulo -> não aponta para local nenhum na memoria
const aprovado = false; //boolean = Verdadeiro ou falso (True|False) -> Logico

/*
const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);
 */
//Dados Primitivos são: String, number, undefined, null, boolean, symbol
let a = 2;
const b = a;
console.log(a, b);

a = 3;
console.log(a, b);