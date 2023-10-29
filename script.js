document.getElementById("calculationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("numberInput").value;
    const sum = Array.from(input).reduce((acc, digit) => acc + (parseInt(digit) || 0), 0);
    const count = input.replace(/[^0-9]/g, "").length;
    const difference = (9 - (sum % 9)) % 9;

    document.getElementById("resultNumber").textContent = input;
    document.getElementById("resultSum").textContent = sum;
    document.getElementById("resultCount").textContent = count;
    document.getElementById("resultAnswer").textContent = difference;
});
