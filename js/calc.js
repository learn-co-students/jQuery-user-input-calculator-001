'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator() {

  var $number1 = $('#number1'),
      $number2 = $('#number2'),
      $operation = $('#operation'),
      $result = $('#result');

  function validNumber(number) {
    return $.isNumeric(number);
  }

  $('#equals').click(function(){
    var num1 = parseFloat($number1.val());
    var num2 = parseFloat($number2.val());
    if (validNumber(num1) && validNumber(num2)) {
      var operation = $operation.val();
      switch(operation) {
        case "+": $result.text(num1 + num2); break;
        case '-': $result.text(num1 - num2); break;
        case '*': $result.text(num1 * num2); break;
        case '/': $result.text(num1 / num2); break;
        default: $result.text("Sorry, not a valid operation!");
      }
    } else {
      $result.text("Sorry, one of those is not a valid number!");
    }
  });


}