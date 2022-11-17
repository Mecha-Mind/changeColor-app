let btn = document.querySelector('#btn');
    wind = document.querySelector('#window');

console.log(btn);
console.log(wind);

let colors = ['red', 'green', 'black', '#436', '#d28', '#3f51b5'];
let i = 0;
btn.onclick = function() {
  wind.style.backgroundColor = colors[i];
  i++;
  if(i == colors.length) {
    i = 0;
  }
}
