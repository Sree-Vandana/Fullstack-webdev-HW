// Enter your code here
function funcvalidate(){
  var number = document.getElementById("input").value;
  if (isNaN(number) || number.toString().length < 8) {
    text = "Please enter 8 digit number to proceed.";
  } else {
    text = number.toString().split("").reverse().join("");
  }
  alert(text);  
}
