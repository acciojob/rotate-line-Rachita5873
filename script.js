//your JS code here. If required.
let line = document.getElementById('line');
let angle = 0;
setInterval(function() {
  angle += 1;
  line.style.transform = `rotate(${angle}deg)`
}, 100);