// Enter your code here
var num = "";
for(var i = 1; i<=100; i++ ){
  if(i%5 == 0 & !i%3 == 0)
  num += "buzz" + "<br>";
  else if(i%3 == 0 & !i%5 == 0)
  num += "fizz" + "<br>";
  else
  num += i + "<br>";
  if(i%3 == 0 & i%5 == 0)
  num += "fizzbuzz" + "<br>";
}
document.getElementById("results").innerHTML = num;


