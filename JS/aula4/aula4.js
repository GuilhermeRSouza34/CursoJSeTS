let nome = 'João'; // forma atual de como usar uma variavel.
let nome2 = 'Maria';
let nome3 = 'Eduardo';
var sobrenome = 'Pedro'; //modo mais antigo de variavel
console.log(nome, sobrenome, 'teste de variavel');

/*
* Não pode criar variaveis com palavras reservadas
* Variaveis precisam ter nomes significativos
* Não pode começar o nome de uma varivel com um numero
* Não pode conter espaços ou traços
* Utiliza-se camelCase "NomeCliente"
* Utiliza-se Case-sensitive diferença entre "nomeCliente" e "NomeCliente" são duas variaveis diferentes
* Não pode redeclarar variaveis com let
*/

console.log('João nasceu em 1984');
console.log('Em 2000', nome, sobrenome, 'conheceu', nome2);
console.log(nome2, 'Teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama', nome3);

//Outra maneira seria assim:
let animal;
animal = 'Cachorro';
console.log(animal);
animal = 'Gato';
console.log(animal);