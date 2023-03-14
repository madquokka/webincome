function calculateHandler(){
   var loan =  $("#loan").val();
   var interest = $("#interest").val();
   var period = $("#period").val();

    loan = parseFloat(loan);
    interest = parseFloat(interest);
    period = parseFloat(period);


    var interestMonth = interest / 12 / 100;

    var div1 = loan * interestMonth *(1 + interestMonth) ** period;
    var div2 = (1 + interestMonth) ** period - 1;

    var result = div1 / div2;

    result = Math.round(result);

    var resultText = `Your ${period} months of repayment amount is  $${result} per monthly `;

    $("#result").text(resultText);
}
function loan100Handler(){
    var loan =  $("#loan").val();

    if(loan == ""){
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 100;

    $("#loan").val(loan);
}

function loan1000Handler(){
    var loan =  $("#loan").val();

    if(loan == ""){
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 1000;

    $("#loan").val(loan);
}

function loan1000000Handler(){
    var loan =  $("#loan").val();

    if(loan == ""){
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 1000000;

    $("#loan").val(loan);
}

function interest3Handler(){
    $("#interest").val(3);
}

function interest4Handler(){
    $("#interest").val(4);
}

function interest5Handler(){
    $("#interest").val(5);
}

function period1Handler(){
    $("#period").val(12);
}

function period2Handler(){
    $("#period").val(24);
}

function period3Handler(){
    $("#period").val(36);
}

$(document).ready(function(){
    $("#calculate").click(calculateHandler);

    $("#loan-100").click(loan100Handler);
    $("#loan-1000").click(loan1000Handler);
    $("#loan-1000000").click(loan1000000Handler);

    $("#interest-3").click(interest3Handler);
    $("#interest-4").click(interest4Handler);
    $("#interest-5").click(interest5Handler);

    $("#period-1").click(period1Handler);
    $("#period-2").click(period2Handler);
    $("#period-3").click(period3Handler);
});