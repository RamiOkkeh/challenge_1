var x = [];
var o = [];
var count = 0
var current = 0;
var done = false;
var click3 = (event) => {
  var id = event.target.id;
  var box = document.getElementById(id);
  var results = document.getElementById('win');
  var reset = document.getElementById('reset');
  if (box.value || done) {
    return; 
  }
  box.value = true;
  count++
  if (count > 8) {
    results.innerHTML = '<p>Tie!</p>';
    reset.innerHTML = '<input class="reset" type="button" onclick="reset()" value="reset"/>';
    done = true;
  }
  if (current === 0) {
    current = 1;
    box.innerHTML = '<div class="x"></div>';
    x.push(id);
    if ((x.includes(id[0] + '1') &&
      x.includes(id[0] + '2') &&
      x.includes(id[0] + '3')) ||
      
      x.includes('x' + id[1]) &&
      x.includes('y' + id[1]) &&
      x.includes('z' + id[1]) ||

      x.includes('x1') &&
      x.includes('y2') &&
      x.includes('z3')
    ) {
      // x wins!
      results.innerHTML = '<p>X Wins!</p>';
      reset.innerHTML = '<input class="reset" type="button" onclick="reset()" value="reset"/>';
      done = true;
    }
  } else {
    current = 0;
    box.innerHTML = '<div class="o"></div>';
    o.push(id);
    if ((o.includes(id[0] + '1') &&
      o.includes(id[0] + '2') &&
      o.includes(id[0] + '3')) ||
      
      o.includes('x' + id[1]) &&
      o.includes('y' + id[1]) &&
      o.includes('z' + id[1]) ||

      o.includes('x1') &&
      o.includes('y2') &&
      o.includes('z3')
    ) {
      // o wins!
      results.innerHTML = '<p>O Wins!</p>';
      reset.innerHTML = '<input class="reset" type="button" onclick="reset()" value="reset"/>';
      done = true;
    }
  }
};


var reset = () => {
  x = [];
  o = [];
  current = 0;
  done = false;
  count = 0
  document.getElementById('win').innerHTML = '';
  document.getElementById('reset').innerHTML = '';
  var boxes = document.getElementsByClassName('box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].value = undefined;
    boxes[i].innerHTML = '';
  }
};