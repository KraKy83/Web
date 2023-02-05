/**
Made with LOVE by @zhoumm, and base on Lining.js and scrollReveal.js.
**/
var demo = document.getElementById('demo');
demo.addEventListener('afterlining', function (e) {
  demo.className = 'visible';

  var element = e.target;
  var lines = element.getElementsByTagName('text-line');
  var line;
  var srs = [
    'enter left',
    'enter right'
  ];
  for (var i = 0, l = lines.length; i < l; i++) {
    line = lines[i];
    line.setAttribute('data-sr', srs[Math.floor(Math.random() * 2)]);
  }

  window.sr = new scrollReveal({
    reset: true,
    move: '30px',
    over: '1.5s',
    scale: {
      direction: 'up',
      power: '0%'
    }
  });
});