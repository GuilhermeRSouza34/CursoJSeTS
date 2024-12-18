// Seleciona os elementos do DOM
const h1 = document.querySelector('.container h1');   // Título principal
const p = document.querySelector('.container .data'); // Parágrafo onde a data será exibida
const data = new Date();                              // Obtém a data e hora atual

// Função para obter o nome do dia da semana com base no número retornado por getDay()
function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0: return 'Domingo';       // Se for 0, retorna "Domingo"
        case 1: return 'Segunda-feira'; // Se for 1, retorna "Segunda-feira"
        case 2: return 'Terça-feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';
        case 5: return 'Sexta-feira';
        case 6: return 'Sábado';
        default: return 'Dia inválido'; // Valor padrão para entradas inválidas
    }
}

// Função para obter o nome do mês com base no número retornado por getMonth()
function getNomeMes(numeroMes) {
    switch (numeroMes) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
        default: return 'Mês inválido'; // Valor padrão para entradas inválidas
    }
}

// Função para formatar e criar a data completa em texto
function criaData(data) {
    const diaSemana = getDiaSemanaTexto(data.getDay()); // Obtém o nome do dia da semana
    const numeroMes = getNomeMes(data.getMonth());      // Obtém o nome do mês
    const dia = data.getDate();                         // Obtém o número do dia do mês
    const ano = data.getFullYear();                     // Obtém o ano com quatro dígitos
    const hora = data.getHours();                       // Obtém a hora atual
    const minutos = data.getMinutes();                  // Obtém os minutos atuais

    // Formata a data no formato desejado e retorna
    return `${diaSemana}, ${dia} de ${numeroMes} de ${ano} - ${hora}:${minutos < 10 ? '0' + minutos : minutos}`;
}

p.innerHTML = criaData(data); // Chama a função criaData passando a data atual
