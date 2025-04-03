document.getElementById('calculate-btn').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    resultElement.textContent = `Seu IMC é ${imc} (${classification}).`;
});
