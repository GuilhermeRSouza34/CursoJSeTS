async function fetchExchangeRate(fromCurrency, toCurrency) {
    const apiKey = 'SUA_API_KEY'; // Substitua por sua chave da API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar as taxas de câmbio.');
        }
        const data = await response.json();
        return data.conversion_rates[toCurrency];
    } catch (error) {
        console.error(error);
        return null;
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

document.getElementById('convert-button').addEventListener('click', async () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultElement = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Por favor, insira um valor válido.";
        return;
    }

    resultElement.textContent = "Carregando...";

    const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);

    if (exchangeRate) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        resultElement.textContent = resultText;

        // Salva no histórico
        saveToHistory(resultText);
        loadHistory();
    } else {
        resultElement.textContent = "Erro ao buscar as taxas de câmbio. Tente novamente mais tarde.";
    }
});

// Carrega o histórico ao iniciar
loadHistory();
