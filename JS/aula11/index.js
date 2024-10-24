/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> true "o primeiro valor verdadeiro"
! -> true -> false "inverte o valor"
*/

const nome = 'Guilherme';
const idade = 21;
const possuiCarro = true;

console.log(nome && idade > 18 && possuiCarro); // true

console.log('Joao' && 'Maria'); // retorna Maria, caso tenha um campo vazio ele mostra a string vazia ou Undefined ou NaN

function falaOi () {
    return 'Oi';
}

const Executar = false;
Executar && falaOi();