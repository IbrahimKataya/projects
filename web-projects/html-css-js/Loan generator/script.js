const calculateLoan = () => {
    let amount = parseFloat(document.getElementById("amount").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let months = parseInt(document.getElementById("months").value);

    let monthlyInterestRate = (interest / 100) / 12;
    let monthPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    let totalPayment = monthPayment * months;
    let totalInterest = totalPayment - amount;

    document.getElementById("result").innerHTML = `
            <h2>Results: </h2>
            <h4>Total payment : ${totalPayment.toFixed(2)}</h4>
            <h4>Monthly payment : ${monthPayment.toFixed(2)}</h4>
            <h4>Total interest : ${totalInterest.toFixed(2)}</h4>
    `;
}
