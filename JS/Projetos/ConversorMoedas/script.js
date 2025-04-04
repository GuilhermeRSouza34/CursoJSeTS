async function fetchExchangeRate(fromCurrency, toCurrency) {
    const apiKey = 'SUA_API_KEY'; // Substitua por sua chave da API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar as taxas de câmbio: ${response.statusText}`);
        }
        const data = await response.json();
        if (!data.conversion_rates[toCurrency]) {
            throw new Error(`Taxa de câmbio não encontrada para ${toCurrency}.`);
        }
        return data.conversion_rates[toCurrency];
    } catch (error) {
        console.error(error);
        throw new Error('Não foi possível obter as taxas de câmbio. Verifique sua conexão ou tente novamente mais tarde.');
    }
}

function saveToHistory(conversion) {
    const history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    history.unshift(conversion); // Adiciona ao início do histórico
    if (history.length > 5) history.pop(); // Mantém no máximo 5 itens
    localStorage.setItem('conversionHistory', JSON.stringify(history));
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';

    if (history.length === 0) {
        historyElement.textContent = 'Nenhum histórico disponível.';
        return;
    }

    history.forEach(item => {
        const historyItem = document.createElement('p');
        historyItem.textContent = item;
        historyElement.appendChild(historyItem);
    });
}

function translateUI(language) {
    const translations = {
        en: {
            title: "Currency Converter",
            from: "From:",
            to: "To:",
            amount: "Amount:",
            convert: "Convert",
            history: "Conversion History",
            noHistory: "No history available.",
            loading: "Loading...",
            invalidValue: "Please enter a valid value.",
            error: "Error fetching exchange rates. Please try again later."
        },
        pt: {
            title: "Conversor de Moedas",
            from: "De:",
            to: "Para:",
            amount: "Valor:",
            convert: "Converter",
            history: "Histórico de Conversões",
            noHistory: "Nenhum histórico disponível.",
            loading: "Carregando...",
            invalidValue: "Por favor, insira um valor válido.",
            error: "Erro ao buscar as taxas de câmbio. Tente novamente mais tarde."
        }
    };

    const elements = {
        title: document.querySelector('h1'),
        from: document.querySelector('label[for="from-currency"]'),
        to: document.querySelector('label[for="to-currency"]'),
        amount: document.querySelector('label[for="amount"]'),
        convert: document.getElementById('convert-button'),
        history: document.querySelector('#history-container h2'),
        result: document.getElementById('result'),
        historyContainer: document.getElementById('history')
    };

    const t = translations[language];

    elements.title.textContent = t.title;
    elements.from.textContent = t.from;
    elements.to.textContent = t.to;
    elements.amount.textContent = t.amount;
    elements.convert.textContent = t.convert;
    elements.history.textContent = t.history;

    if (elements.result.textContent === 'Nenhum histórico disponível.' || elements.result.textContent === 'No history available.') {
        elements.result.textContent = t.noHistory;
    }
}

document.getElementById('convert-button').addEventListener('click', async () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultElement = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Por favor, insira um valor válido.";
        resultElement.className = 'error';
        return;
    }

    resultElement.textContent = "Carregando...";
    resultElement.className = 'loading';

    try {
        const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        resultElement.textContent = resultText;
        resultElement.className = '';

        // Salva no histórico
        saveToHistory(resultText);
        loadHistory();
    } catch (error) {
        resultElement.textContent = error.message;
        resultElement.className = 'error';
    }
});

// Carrega o histórico ao iniciar
loadHistory();

// Traduz a interface para o idioma padrão (português)
translateUI('pt');
