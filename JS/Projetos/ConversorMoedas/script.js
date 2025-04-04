async function fetchExchangeRate(fromCurrency, toCurrency) {
    const apiKey = 'SUA_API_KEY'; // Substitua por sua chave da API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar as taxas de câmbio.');response.statusText}`);
        }
        const data = await response.json();
        return data.conversion_rates[toCurrency];
    } catch (error) { Error(`Taxa de câmbio não encontrada para ${toCurrency}.`);
        console.error(error);
        return null;conversion_rates[toCurrency];
    } catch (error) {
}       console.error(error);
        throw new Error('Não foi possível obter as taxas de câmbio. Verifique sua conexão ou tente novamente mais tarde.');
function saveToHistory(conversion) {
    const history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    history.unshift(conversion); // Adiciona ao início do histórico
    if (history.length > 5) history.pop(); // Mantém no máximo 5 itens
    localStorage.setItem('conversionHistory', JSON.stringify(history));)) || [];
}   history.unshift(conversion); // Adiciona ao início do histórico
    if (history.length > 5) history.pop(); // Mantém no máximo 5 itens
function loadHistory() {('conversionHistory', JSON.stringify(history));
    const history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';
    const history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    if (history.length === 0) {ment.getElementById('history');
        historyElement.textContent = 'Nenhum histórico disponível.';
        return;
    }f (history.length === 0) {
        historyElement.textContent = 'Nenhum histórico disponível.';
    history.forEach(item => {
        const historyItem = document.createElement('p');
        historyItem.textContent = item;
        historyElement.appendChild(historyItem);
    }); const historyItem = document.createElement('p');
}       historyItem.textContent = item;
        historyElement.appendChild(historyItem);
document.getElementById('convert-button').addEventListener('click', async () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);nc () => {
    const resultElement = document.getElementById('result');ncy').value;
    const toCurrency = document.getElementById('to-currency').value;
    if (isNaN(amount) || amount <= 0) {getElementById('amount').value);
        resultElement.textContent = "Por favor, insira um valor válido.";
        resultElement.className = 'error';
        return;f (isNaN(amount) || amount <= 0) {
    }        resultElement.textContent = "Por favor, insira um valor válido.";

    resultElement.textContent = "Carregando...";    }
    resultElement.className = 'loading';
    resultElement.textContent = "Carregando...";
    try {
        const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;ngeRate).toFixed(2);
        resultElement.textContent = resultText;        const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        resultElement.className = '';tent = resultText;

        // Salva no históricostórico
        saveToHistory(resultText);ToHistory(resultText);
        loadHistory();
    } catch (error) { catch (error) {
        resultElement.textContent = error.message;     resultElement.textContent = error.message;
        resultElement.className = 'error';    }
    }
});
// Carrega o histórico ao iniciar



loadHistory();// Carrega o histórico ao iniciarloadHistory();
