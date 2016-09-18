$(document).on("ready", function(){
var currentNumber = 0,
secondNumber = 0,
result, operation, history;

$(".numbers").on("click", function(){
    if (currentNumber.length === 16) {
        return;
    }
    if (currentNumber == 0) {
        currentNumber = $(this).text();
    }else{
        currentNumber += $(this).text();
    }
    $("#result").text(currentNumber);
    history = currentNumber;
    // $("#history").text(history);
})

$(".backspace").on("click", function(){
    if (currentNumber === 0) return;
    currentNumber = currentNumber.substr(0, currentNumber.length - 1);
    if (!currentNumber) currentNumber = 0;
    $("#result").text(currentNumber);
    // $("#history").text(currentNumber);

})

$(".operation").on("click", function(){
    operation = $(this).text();
    secondNumber = currentNumber;
    $("#history").text(currentNumber + operation)
    currentNumber = 0;

})
$(".equals").on("click", function(){
      switch(operation){
        case "+":
          result = Number(currentNumber) + Number(secondNumber);
          $("#result").text(result);
            break;
        case "-":
          result = Number(secondNumber) - Number(currentNumber);
          $("#result").text(result);
            break;
        case "*":
          result = Number(currentNumber) * Number(secondNumber);
          $("#result").text(result);
            break;
        case "/":
          result = Number(secondNumber) / Number(currentNumber);
          $("#result").text(result);
            break;
    }

    currentNumber = 0;
});
$(".reset").on("click", function() {
  result = 0;
  secondNumber = 0;
  currentNumber = 0;
  $("#result").text(result);
});
// $(".coma").on("click", function() {
// // console.log(currentNumber.length);
// for (var i = 0; i < currentNumber.length; i++) {
//   console.log(currentNumber[i]);
//   if (currentNumber[i] == '.') {
//     return;
//   }
//   else {
//     currentNumber += ".";
//   }
// }
// })
})
