document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("transaction-form");
    const transactionsList = document.getElementById("transactions-list");
    const balanceElement = document.getElementById("balance");

    let transactions = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const description = document.getElementById("description").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (!description || isNaN(amount)) return;

        const transaction = { description, amount };
        transactions.push(transaction);

        updateUI();
        form.reset();
    });

    function updateUI() {
        transactionsList.innerHTML = "";
        let balance = 0;

        transactions.forEach((transaction) => {
            const li = document.createElement("li");
            li.textContent = `${transaction.description}: R$ ${transaction.amount.toFixed(2)}`;
            transactionsList.appendChild(li);

            balance += transaction.amount;
        });

        balanceElement.textContent = `Saldo: R$ ${balance.toFixed(2)}`;
    }
});
