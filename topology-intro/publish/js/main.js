var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

let t = 0;
const slider = document.getElementById("slider");

const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const width = 400;
const height = 400;
canvas.width = width;
canvas.height = height;

function drawArrowhead(x, y, angle, ctx, canvas) {
    const arrowSize = 8;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-arrowSize, -arrowSize);
    ctx.lineTo(0, 0);
    ctx.lineTo(-arrowSize, arrowSize);
    ctx.stroke();
    ctx.restore();
}

function drawAxes(margin, ctx, canvas) {
    const arrowSize = 8; // Size of arrowheads

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#363636';

    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(margin, canvas.height - margin);
    ctx.lineTo(canvas.width - margin, canvas.height - margin);
    ctx.stroke();
    drawArrowhead(canvas.width - margin, canvas.height - margin, 0, ctx, canvas);

    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, canvas.height - margin);
    ctx.stroke();
    drawArrowhead(margin, margin, -Math.PI / 2, ctx, canvas);
}

function drawGrid(margin, n, ctx, canvas) {
    // Draw grid lines
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    delta = (canvas.width - 2 * margin) / n;

    for (let x = margin; x < canvas.width - margin; x += delta) {
        ctx.beginPath();
        ctx.moveTo(x, margin);
        ctx.lineTo(x, canvas.height - margin);
        ctx.stroke();
    }

    for (let y = margin; y < canvas.height - margin; y += delta) {
        ctx.beginPath();
        ctx.moveTo(margin, y);
        ctx.lineTo(canvas.width - margin, y);
        ctx.stroke();
    }
}

function plotFunction(t) {
    const margin = 40; // Margin for the axes

    drawAxes(margin, ctx, canvas);
    drawGrid(margin, 16, ctx, canvas);

    // Plot x^2
    ctx.beginPath();
    ctx.strokeStyle = '#d6430d';
    ctx.lineWidth = 2;
    for (let x = 0; x <= canvas.width - 2 * margin; x++) {
        const y = Math.pow(x / (canvas.width - 2 * margin), 2) * (canvas.height - 2 * margin);
        ctx.lineTo(x + margin, canvas.height - margin - y);
    }
    ctx.stroke();

    // Plot (1-t)x^2 + tx
    // Plot (1-t)x^2 + tx
    ctx.beginPath();
    ctx.strokeStyle = '#7bc99a';
    ctx.lineWidth = 2;
    for (let x = 0; x <= canvas.width - 2 * margin; x++) {
        const y = ((1 - t) * Math.pow(x / (canvas.width - 2 * margin), 2) + t * (x / (canvas.width - 2 * margin))) * (canvas.height - 2 * margin);
        ctx.lineTo(x + margin, canvas.height - margin - y);
    }
    ctx.stroke();


    // Display parameter t
  ctx.fillStyle = 'black';
  ctx.fillText('t: ' + t.toFixed(2), canvas.width - margin - 60, margin + 20);

  // // Render LaTeX equation
  // const equation = '(1-t)x^2 + tx';
  // const equationX = canvas.width - margin - 100;
  // const equationY = margin + 60;
  // ctx.font = '14px Arial';
  // ctx.fillStyle = 'black';
  // ctx.fillText('Equation:', equationX, equationY - 20);
  // renderLatex(equation, equationX, equationY);
}

// // Function to render LaTeX
// function renderLatex(equation, x, y) {
//   const math = String.raw`\( ${equation} \)`;
//   const container = document.createElement('div');
//   container.style.position = 'absolute';
//   container.style.left = `${x}px`;
//   container.style.top = `${y}px`;
//   container.style.fontSize = '16px';
//   container.textContent = math;
//   canvas.appendChild(container);
//   MathJax.typeset([container]);
// }

slider.addEventListener('input', function() {
  const t = parseFloat(this.value);
  plotFunction(t);
});

plotFunction(0.5);


(function () {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;


    const margin = 40; // Margin for the axes

    drawAxes(margin, ctx, canvas);
    const n = 4;
    const h = canvas.height;
    drawGrid(margin, n, ctx, canvas);
    delta = (canvas.width - 2 * margin) / n;

    // Plot x^2
    ctx.beginPath();
    ctx.strokeStyle = '#d6430d';
    ctx.lineWidth = 2;
    ctx.lineTo(margin, margin + 4 * delta);
    ctx.lineTo(margin + 2 * delta, margin + 3 * delta);
    ctx.lineTo(margin + 3 * delta, margin + 2 * delta);
    ctx.lineTo(margin + 4 * delta, margin);
    ctx.stroke();

})();

(function () {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;


    const margin = 40; // Margin for the axes

    drawAxes(margin, ctx, canvas);
    const n = 4;
    const h = canvas.height;
    drawGrid(margin, n, ctx, canvas);
    delta = (canvas.width - 2 * margin) / n;

    // Plot x^2
    ctx.beginPath();
    ctx.strokeStyle = '#d6430d';
    ctx.lineWidth = 2;
    ctx.lineTo(margin, margin + 4 * delta);
    ctx.lineTo(margin + 2 * delta, margin + 4 * delta);
    //ctx.lineTo(margin + 3 * delta, margin + 2 * delta);
    ctx.lineTo(margin + 4 * delta, margin);
    ctx.stroke();

})();

(function () {
    const canvas = document.getElementById("canvas4");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;


    const margin = 40; // Margin for the axes

    drawAxes(margin, ctx, canvas);
    const n = 4;
    const h = canvas.height;
    drawGrid(margin, n, ctx, canvas);
    delta = (canvas.width - 2 * margin) / n;

    // Plot x^2
    ctx.beginPath();
    ctx.strokeStyle = '#d6430d';
    ctx.lineWidth = 2;
    ctx.lineTo(margin, margin);
    ctx.lineTo(margin + 2 * delta, margin);
    //ctx.lineTo(margin + 3 * delta, margin + 2 * delta);
    ctx.lineTo(margin + 4 * delta, margin + 4 * delta);
    ctx.stroke();

})();

(function () {
    const canvas = document.getElementById("canvas-comb");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;


    const margin = 40; // Margin for the axes

    //drawAxes(margin, ctx, canvas);
    const n_ = 4;
    const h = canvas.height;
    drawGrid(margin, n_, ctx, canvas);
    delta = (canvas.width - 2 * margin) / n_;

    // Plot x^2
    ctx.beginPath();
    ctx.strokeStyle = '#d6430d';
    ctx.lineWidth = 2;
    ctx.lineTo(margin, margin);
    ctx.lineTo(margin, margin + 4 * delta);
    for (let n = 0; n <= 100; n++) {
        //const y = ((1 - t) * Math.pow(x / (canvas.width - 2 * margin), 2) + t * (x / (canvas.width - 2 * margin))) * (canvas.height - 2 * margin);
        ctx.lineTo(margin + (4 * delta) / n, margin + 4 * delta);
        ctx.lineTo(margin + (4 * delta) / n, margin);
        ctx.moveTo(margin + (4 * delta) / n, margin + 4 * delta)
    }
    ctx.stroke();

})();

function renderLatex(equation, x, y) {
  const math = String.raw`\( ${equation} \)`;
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  container.style.fontSize = '16px';
  container.textContent = math;
  document.getElementById("container").appendChild(container);
  MathJax.typeset([container]);
}

(function () {
    const canvas = document.getElementById("canvas-diag");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;


    const margin = 40; // Margin for the axes

    //drawAxes(margin, ctx, canvas);
    const n = 10;
    delta = (canvas.width - 2 * margin) / n;

    // Plot x^2
    renderLatex("f", margin + 4 * delta, margin + 4 * delta);
    renderLatex("p", margin + 9 * delta, margin + 4 * delta);
    renderLatex("F_0(z)", margin + 4 * delta, margin + 9 * delta);
    ctx.beginPath();
    ctx.strokeStyle = '#363636';
    ctx.lineWidth = 2;
    ctx.lineTo(margin, margin);
    ctx.lineTo(margin, margin + 4 * delta);
    for (let n = 0; n <= 100; n++) {
        //const y = ((1 - t) * Math.pow(x / (canvas.width - 2 * margin), 2) + t * (x / (canvas.width - 2 * margin))) * (canvas.height - 2 * margin);
        ctx.lineTo(margin + (4 * delta) / n, margin + 4 * delta);
        ctx.lineTo(margin + (4 * delta) / n, margin);
        ctx.moveTo(margin + (4 * delta) / n, margin + 4 * delta)
    }
    ctx.stroke();

})();