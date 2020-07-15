// Enter your code here
window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  document.getElementById('width').innerHTML = w;
  document.getElementById('height').innerHTML = h;
};