const hora = 9;

//if pode ser usado sozinho
// Sempre que utilizado o else, preciso de um if antes
// Eu posso ter varios else ifs na checagem
// poder ter apenas um else na checagem

if (hora < 12) {
    console.log('Bom dia!');
}
else if (hora <= 18) {
    console.log('Boa Tarde!');
}
else {
    console.log('Boa Noite!');
}
