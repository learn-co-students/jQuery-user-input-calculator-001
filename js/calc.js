'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator(){
  this.$firstNumber = $('#number1');
  this.$secondNumber = $('#number2');
  this.$operator = $('#operation');
  this.$result = $('#result');
  this.$equals = $('#equals');

  this.addEqualsListener();
}

Calculator.prototype.hasValidOperator = function(){
  return( !!this.$operator.val().match(/^[\+\-\/\*]{1}$/) );
};

Calculator.prototype.hasValidNumbers = function(){
  return ( 
    !/\D+/g.test( this.$firstNumber.val() ) 
    && !/\D+/g.test( this.$secondNumber.val() ) 
  );
};

Calculator.prototype.displayErrors = function(){
  if( !this.hasValidNumbers() ){
    this.$result.text('Sorry, one of those is not a valid number!');
  } else {
    this.$result.text('Sorry, not a valid operation!');
  }
};

Calculator.prototype.calculate = function(){
  switch( this.$operator.val() ) {
    case '+': 
      return( Number(this.$firstNumber.val()) + Number(this.$secondNumber.val()) );
      break;
    case '-': 
      return( Number(this.$firstNumber.val()) - Number(this.$secondNumber.val()) );
      break;
    case '*': 
      return( Number(this.$firstNumber.val()) * Number(this.$secondNumber.val()) );
      break;
    case '/': 
      return( Number(this.$firstNumber.val()) / Number(this.$secondNumber.val()) );
      break;
  }
};

Calculator.prototype.displayCalculation = function(){
  this.$result.text( this.calculate() );
};

Calculator.prototype.displayResult = function(){
  if ( this.hasValidNumbers() && this.hasValidOperator() ){
    this.displayCalculation();
  } else {
    this.displayErrors();
  }
};

Calculator.prototype.addEqualsListener = function(){
  var self = this;
  this.$equals.click(function(){
    self.displayResult();
  });
};