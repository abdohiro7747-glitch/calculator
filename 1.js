function calculate(op) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result;

    if (op === '+') result = n1 + n2;
    if (op === '-') result = n1 - n2;
    if (op === '*') result = n1 * n2;
    if (op === '/') {
        if (n2 === 0) {
            alert("لا يمكن القسمة على صفر");
            return;
        }
        result = n1 / n2;
    }

    document.getElementById("result").innerText = "النتيجة: " + result;
}