const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia inválido';
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            numeroMes = 'Janeiro';
            return numeroMes;
        case 1:
            numeroMes = 'Fevereiro';
            return numeroMes;
        case 2:
            numeroMes = 'Março';
            return numeroMes;
        case 3:
            numeroMes = 'Abril';
            return numeroMes;
        case 4:
            numeroMes = 'Maio';
            return numeroMes;
        case 5:
            numeroMes = 'Junho';
            return numeroMes;
        case 6:
            numeroMes = 'Julho';
            return numeroMes;
        case 7:
            numeroMes = 'Agosto';
            return numeroMes;
        case 8:
            numeroMes = 'Setembro';
            return numeroMes;
        case 9:
            numeroMes = 'Outubro';
            return numeroMes;
        case 10:
            numeroMes = 'Novembro';
            return numeroMes;
        case 11:
            numeroMes = 'Dezembro';
            return numeroMes;
        default:
            numeroMes = 'Mês inválido';
    }
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto();
}

h1.innerHTML = getDiaSemanaTexto(data.getDay());
