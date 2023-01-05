// Set up canvas and context
let cnv = document.getElementById("tic-tac-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Variables
let wins = 0;
let losses = 0;

let player = 1;

let array = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

let mouseX, mouseY;


function drawAll(player) {
    // Draw Background
    drawBackground();
    checkArray();
}

// Drawing the Lines
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
    ctx.stroke();
    
    // Draw hori line 1
    ctx.moveTo(0, 200);
    ctx.lineTo(600, 200);
    ctx.stroke();

    // Draw hori line 2
    ctx.moveTo(0, 400);
    ctx.lineTo(600, 400);
    ctx.stroke();
}

function checkArray(){
    for (let i=0; i < array.length; i++) {
        for (let t=0; t < array[i].length; t++) {
            if (array[i][t] === 1) {
                drawX(i, t);
            } else if (array[i][t] === -1) {
                drawO(i, t)
            }
        }
    }
}

function drawX(row, column) {
    let startX, startY;
    if (row === 0) {
        
    } else if (row === 1) {
        
    } else if (row === 2) {
        
    }

    if (column === 0) {
        
    } else if (column === 1) {
        
    } else if (column === 2) {
        
    }
}

function drawO(row, column) {
    let x, y;
    if (row === 0) {
        y = 100;
    } else if (row === 1) {
        y = 300;
    } else if (row === 2) {
        y = 500;
    }

    if (column === 0) {
        x = 100;
    } else if (column === 1) {
        x = 300;
    } else if (column === 2) {
        x = 500;
    }
}

// Event Listener
window.addEventListener("click", checkMousePosition);
function checkMousePosition(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = event.clientX - cnvRect.left;
    mouseY = event.clientY - cnvRect.top;

    // Change Array
    if (player === 1) {
        let i = 0;
        let t = 0;
        if (mouseX <= 200) {
            i = 0;
        } else if (mouseX <= 400) {
            i = 1;
        } else if (mouseX <= 600) {
            i = 2;
        }

        if (mouseY <= 200) {
            t = 0;
        } else if (mouseY <= 400) {
            t = 1;
        } else if (mouseY <= 600) {
            t = 2;
        }
        
        array[i][t] = 1;
    } else {
        let i = 0;
        let t = 0;
        if (mouseX <= 200) {
            i = 0;
        } else if (mouseX <= 400) {
            i = 1;
        } else if (mouseX <= 600) {
            i = 2;
        }

        if (mouseY <= 200) {
            t = 0;
        } else if (mouseY <= 400) {
            t = 1;
        } else if (mouseY <= 600) {
            t = 2;
        }
        
        array[i][t] = -1;
    }

    if (player === 1) {
        player = 0;
    } else {
        player = 1;
    }
    // Draw All
    drawAll();
}