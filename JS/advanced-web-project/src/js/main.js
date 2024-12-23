// Seleciona os elementos do DOM
const h1 = document.querySelector('.container h1');   // Título principal
const p = document.querySelector('.container .data'); // Parágrafo onde a data será exibida
const data = new Date();                              // Obtém a data e hora atual

// Função para obter o nome do dia da semana com base no número retornado por getDay()
function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0: return 'Domingo';
        case 1: return 'Segunda-feira';
        case 2: return 'Terça-feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';
        case 5: return 'Sexta-feira';
        case 6: return 'Sábado';
    }
}

// Função para formatar a data
function formatarData(data) {
    const diaSemana = getDiaSemanaTexto(data.getDay());
    const dia = data.getDate();
    const mes = data.toLocaleString('pt-BR', { month: 'long' });
    const ano = data.getFullYear();
    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

// Atualiza o conteúdo do DOM com a data formatada
h1.innerHTML = 'Data Atual';
p.innerHTML = formatarData(data);