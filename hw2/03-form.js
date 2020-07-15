// Enter your code here
function displayOnConsole(){
  //console.log("Hello World");
  console.log('name: ' + document.getElementById('name').value);
  console.log('email: ' + document.getElementById('email').value);
  console.log('comments: ' + document.getElementById('Submityourmessage').value);
  let checkbox = document.getElementById('newsletter');
  let cb = 'on';
  if(!checkbox.checked){
    cb = 'off';
  }
  console.log('newsletter: ' + cb);
  return false;
}