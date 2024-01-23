var elem = document.getElementById('canvas');
var context = elem.getContext('2d');

context.fillStyle = '#000';
context.lineWidth = 20;

var deg_to_rad = Math.PI / 180.0;
var depth = 9;

function drawLine(x1, y1, x2, y2, lw){
  console.log(lw);
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineWidth = lw;
  context.closePath();
  context.stroke();
}

function drawTree(x1, y1, angle, depth, lw){
if (depth != 0){
    var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 10.0);
    var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 10.0);
    drawLine(x1, y1, x2, y2, lw);
    drawTree(x2, y2, angle - 20, depth - 1, lw / 2);
    drawTree(x2, y2, angle + 20, depth - 1, lw / 2);
    }

}