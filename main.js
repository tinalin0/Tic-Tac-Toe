// Set up canvas and context
let cnv = document.getElementById("tic-tac-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Variables
let wins = 0;
let losses = 0;

let array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// Drawing the Lines
requestAnimationFrame(drawAll);

function drawAll() {
    drawBackground();

    requestAnimationFrame(drawAll);
}

function drawBackground() {
    // Draw vert line 1
    ctx.linewidth = 2;
    ctx.strokestyle = "rgb(255, 255, 255)";
    ctx.beginPath(); 
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 600);
    ctx.stroke(); // Draw line

    // Draw vert line 2
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    
    // Draw hori line 1
    ctx.moveTo(0, 200);
    ctx.lineTo(600, 200);

    // Draw hori line 2
    ctx.moveTo(0, 400);
    ctx.lineTo(600, 400);
}