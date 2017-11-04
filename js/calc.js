'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator(){
  this.calculate();
}

Calculator.prototype.validNumber = function(){
  var num1 = Number($("#number1").val())
  var num2 = Number($("#number2").val())

  if ($.isNumeric(num1) == false || $.isNumeric(num2) == false || $("#number2").val() == "" || $("#number1").val() == "") 
  {
     $("#result").text("Sorry, one of those is not a valid number!")
     return false
  }
}

Calculator.prototype.validOperator = function(){
  var op = $("#operation").val()
  if (op.match(/^[+/\-/*/\/]$/) == null)
    {
      $("#result").text("Sorry, not a valid operation!")
      return false
    }
  }



Calculator.prototype.calculate = function(){
  $("#equals").click(function(){

    if (this.validNumber() == false || this.validOperator() == false){
      return
    }
    else {
      var num1 = Number($("#number1").val())
      var num2 = Number($("#number2").val())
      var operation = $("#operation").val()

      switch (operation){
        case '+': 
          $("#result").text(num1 + num2)
          break;
        case '-':
          $("#result").text(num1 - num2)
          break;
        case '/':
          $("#result").text(num1 / num2)
          break;
        case '*':
          $("#result").text(num1 * num2)
          break;
      }
    }

  }.bind(this))
}