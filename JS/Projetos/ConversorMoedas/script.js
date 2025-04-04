document.getElementById('convert-button').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultElement = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Por favor, insira um valor válido.";
        return;
    }

    // Exibição inicial do resultado (sem conversão real ainda)
    resultElement.textContent = `Convertendo ${amount} ${fromCurrency} para ${toCurrency}...`;
});
