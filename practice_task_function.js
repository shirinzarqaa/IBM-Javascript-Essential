let length;
let width;

function groceryTracker() {
    amount1 = parseFloat(document.getElementById('amount1').value);
    amount2 = parseFloat(document.getElementById('amount2').value);
    amount3 = parseFloat(document.getElementById('amount3').value);

    let totalAmount = amount1 + amount2 + amount3;
     document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}