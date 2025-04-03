/*
Operadores Logicos
&& -> AND -> E (Todas as expressoes precisam ser verdadeiras para retornar True)
|| -> OR -> OU
! -> NOT -> NEGAÇÃO
*/

const expressaoAnd = true && true && true;
console.log(expressaoAnd);

const expressaoOr = true || false || false;
console.log(expressaoOr);

const expressaoNot = !true;
console.log(expressaoNot);



//utilizando de maneira pratica
const usuario = 'Luiz'; // form usuario digitou
const senha = '123456'; // form senha digitou

const LoginUser = usuario === 'Luiz' && senha === '123456';
console.log(LoginUser);