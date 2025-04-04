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
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        resultElement.textContent = "Erro ao buscar as taxas de câmbio. Tente novamente mais tarde.";
    }
});
