function plusHandler() {
    var firstNumber = $("#first-number").val();
    var secondNumber = $("#second-number").val();

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    var result = firstNumber + secondNumber;

    $("#result").text(result);
}

function minusHandler() {
    var firstNumber = $("#first-number").val();
    var secondNumber = $("#second-number").val();

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    var result = firstNumber - secondNumber;

    $("#result").text(result);
}

function multiplyHandler() {
    var firstNumber = $("#first-number").val();
    var secondNumber = $("#second-number").val();

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    var result = firstNumber * secondNumber;

    $("#result").text(result);
}

function divideHandler() {
    var firstNumber = $("#first-number").val();
    var secondNumber = $("#second-number").val();

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    var result = firstNumber / secondNumber;

    $("#result").text(result);
}

$(document).ready(function() {
    $("#plus").click(plusHandler)
    $("#minus").click(minusHandler)
    $("#multiply").click(multiplyHandler)
    $("#divide").click(divideHandler)
});