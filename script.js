function Addition() {
    let n1 = parseFloat(document.getElementById("Number1").value)
    let n2 = parseFloat(document.getElementById("Number2").value)
    result = n1 + n2
    document.getElementById("result").innerHTML = result
}
function Subtraction() {
    let n1 = parseFloat(document.getElementById("Number1").value)
    let n2 = parseFloat(document.getElementById("Number2").value)
    result = n1 - n2
    document.getElementById("result").innerHTML = result
}
function Multiplication() {
    let n1 = parseFloat(document.getElementById("Number1").value)
    let n2 = parseFloat(document.getElementById("Number2").value)
    result = n1 * n2
    document.getElementById("result").innerHTML = result
}
function Division() {
    let n1 = parseFloat(document.getElementById("Number1").value)
    let n2 = parseFloat(document.getElementById("Number2").value)
    result = n1 / n2
    document.getElementById("result").innerHTML = result
}