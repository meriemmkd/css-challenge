function append(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = 0;
}

function deleteLast() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result.replace(/,/g, ''));
    } catch (error) {
        document.getElementById("result").value = "Erreur";
    }
}




