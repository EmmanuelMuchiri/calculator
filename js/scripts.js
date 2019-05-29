var add=function(numberOne,numberTwo)
{
return numberOne+numberTwo;
}
var numberOne=parseInt(prompt("enter your first number to perform addition"));
var numberTwo=parseInt(prompt("enter your second number"));
alert("The sum after adding"+numberOne+"and"+numberTwo+"="+(add(numberOne,numberTwo)));

var subtract=function(numberOne,numberTwo)
{
  return numberOne-numberTwo;
}
var numberOne=parseInt(prompt("Enter your first number to perform subtraction"));
var numberTwo=parseInt(prompt("Enter your second number"));
alert("The result after subtracting"+numberOne+"and"+numberTwo+"="+(subtract(numberOne,numberTwo)));
 var multiply=function(numberOne,numberTwo)
 {
   return numberOne*numberTwo;
 }
 var numberOne=parseInt(prompt("Enter your first number to perform multiplication"));
 var numberTwo=parseInt(prompt("Enter your second number"));
alert("The result after multiplying"+numberOne+"and"+numberTwo+"="+(multiply(numberOne,numberTwo)));
var divide=function(numberOne,numberTwo)
{
  return numberOne/numberTwo;
}
var numberOne=parseInt(prompt("Enter your first number to divide with the other number"));
var numberTwo=parseInt(prompt("Enter your second number"));
alert("The result after dividing"+numberOne+"and"+numberTwo+"="+(divide(numberOne,numberTwo)));
