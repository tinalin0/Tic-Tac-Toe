// Set up canvas and context
let cnv = document.getElementById("tic-tac-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Variables
let player1Wins = 0;
let player2Wins = 0;
let draws1 = 0;

let wins = 0;
let losses = 0;
let draws2 = 0;

let player = 1;
let gui = "player";

let array = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

let mouseX, mouseY;

// Player Elements
let p1NumEl = document.getElementById("p1-num");
let p2NumEl = document.getElementById("p2-num");
let drawNumEl1 = document.getElementById("draw-1")

// Machine Elements
let winNumEl = document.getElementById("win-num");
let lossNumEl = document.getElementById("loss-num");
let drawNumEl2 = document.getElementById("draw-2");

// OnLoad
window.addEventListener("load", drawBackground);

function drawAll() {
    // Draw Background
    drawBackground();
    checkArray();
    let returnNum = checkWin();
    if (returnNum === 0) {
        return;
    }
    checkSquareFill();
}

// Drawing the Lines
function drawBackground() {
    ctx.fillStyle = "white";
    ctx.fillRect (0, 0, 600, 600);

    // Draw vert line 1
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.beginPath(); 
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 600);
    ctx.stroke(); 

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

    ctx.closePath();
}

function checkArray(){
    for (let i = 0; i < array.length; i++) {
        for (let t = 0; t < array[i].length; t++) {
            if (array[i][t] === 1) {
                drawX(i, t);
            } else if (array[i][t] === -1) {
                drawO(i, t);
            }
        }
    }
}

function checkWin() {
    // check row
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === array[i][1] && array[i][0] === array[i][2] && array[i][0] !== 0) {
            if (i === 0) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(25, 100);
                ctx.lineTo(575, 100);
                ctx.stroke();
            } else if (i === 1) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(25, 300);
                ctx.lineTo(575, 300);
                ctx.stroke();
            } else if (i === 2) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(25, 500);
                ctx.lineTo(575, 500);
                ctx.stroke();
            }
            if (array[i][0] === 1) {
                updateScore();
                performResetAfterDelay();
            } else if (array[i][0] === -1) {
                updateScore();
                performResetAfterDelay();
            }
        }
    }

    // check column
    for (let i = 0; i < array.length; i++) {
        if (array[0][i] === array[1][i] && array[0][i] === array[2][i] && array[0][i] !== 0) {
            if (i === 0) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(100, 25);
                ctx.lineTo(100, 575);
                ctx.stroke();
            } else if (i === 1) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(300, 25);
                ctx.lineTo(300, 575);
                ctx.stroke();
            } else if (i === 2) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(500, 25);
                ctx.lineTo(500, 575);
                ctx.stroke();
            }
            if (array[0][i] === 1) {
                updateScore();
                performResetAfterDelay();
            } else if (array[0][i] === -1) {
                updateScore();
                performResetAfterDelay();
            }
        }
    }

    // check diagonals
    if (array[0][0] === array[1][1] && array[0][0] === array[2][2] && array[0][0] !== 0) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(575, 575);
        ctx.stroke();
        if (array[0][0] === 1) {
            wins++;
            winNumEl.innerHTML = wins;
            performResetAfterDelay();
        } else if (array[0][0] === -1) {
            losses++;
            lossNumEl.innerHTML = losses;
            performResetAfterDelay();
        }
    } else if (array[0][2] === array[1][1] && array[0][2] === array[2][0] && array[0][2] !== 0) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(575, 25);
        ctx.lineTo(25, 575);
        ctx.stroke();
        if (array[0][2] === 1) {
            updateScore();
            performResetAfterDelay();
        } else if (array[0][2] === -1) {
            updateScore();
            performResetAfterDelay();
        }
    }
}

function checkSquareFill() {
    let squaresFilled = 0;
    for(let i = 0; i < array.length; i++) {
        for (let t = 0; t < array[i].length; t++) {
            if (array[i][t] !== 0) {
                squaresFilled++;
            }
        }
    }

    if (squaresFilled === 9) {
        if (gui === "player") {
            draws1++;
            drawNumEl1.innerHTML = draws1;
        } else {
            draws2++;
            drawNumEl2.innerHTML = draws2;
        }
        performResetAfterDelay();
    }
}

// Helper Functions
function updateScore() {
    if (gui === "player") {
        if (player === 1) {
            player1Wins++;
            p1NumEl.innerHTML = player1Wins;
        } else {
            player2Wins++;
            p2NumEl.innerHTML = player2Wins;
        }
    } else {
        if (player === 1) {
            wins++;
            winNumEl.innerHTML = wins;
        } else {
            losses++;
            lossNumEl.innerHTML = losses;
        }
    }
}

function drawX(row, column) {
    let startX, startY;
    if (row === 0) {
        startY = 150;
    } else if (row === 1) {
        startY = 350;
    } else if (row === 2) {
        startY = 550;
    }

    if (column === 0) {
        startX = 50;
    } else if (column === 1) {
        startX = 250;
    } else if (column === 2) {
        startX = 450;
    }

    // Draw X
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 100, startY - 100);
    ctx.stroke();

    ctx.moveTo(startX, startY - 100);
    ctx.lineTo(startX + 100, startY);
    ctx.stroke();

    ctx.closePath();
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

    // Draw Circle
    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

// Reseting everything
function performResetAfterDelay() {
    window.setTimeout(resetEverything, 500);
}
  
function resetEverything() {
    array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    drawBackground();
    player = 1;
    return 0;
}

// Event Listener
window.addEventListener("click", mouseHandler);
function mouseHandler(event) {
    let sym = checkMousePosition(event);
    // Check Mode
    if (gui === "player") {
        // Check player
        if (player === 1) {
            if (array[sym[0]][sym[1]] === 0) {
                array[sym[0]][sym[1]] = 1;
            }
        } else if (player === 0) {
            if (array[sym[0]][sym[1]] === 0) {
                array[sym[0]][sym[1]] = -1;
            }
        }
        // Change players
        if (player === 1) {
            player = 0;
        } else {
            player = 1;
        }
    } else if (gui === "machine") {
        if (array[sym[0]][sym[1]] === 0) {
            array[sym[0]][sym[1]] = 1;
        }
        let mac = machineChooses();
        array[mac[0]][mac[1]] = -1;
    }

    console.log(mouseX);
    console.log(mouseY);
    console.log(array);
    console.log(player);
    // Draw All
    drawAll();
}

// Helper function
function checkMousePosition(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = event.clientX - cnvRect.left;
    mouseY = event.clientY - cnvRect.top;

    // Variables
    let i = -1;
    let t = -1;
        
    if (mouseX <= 600) {
        if (mouseY <= 600) {
            // Mouse X's position
            if (mouseX <= 200) {
                t = 0;
            } else if (mouseX <= 400) {
                t = 1;
            } else if (mouseX <= 600) {
                t = 2;
            }

            // Mouse Y's position 
            if (mouseY <= 200) {
                i = 0;
            } else if (mouseY <= 400) {
                i = 1;
            } else if (mouseY <= 600) {
                i = 2;
            }
        }
    }
    if (i >= 0 && t >= 0) {
        console.log(i, t)
        return [i, t];
    }
}

function machineChooses() {
    let i = 0;
    let t = 0;
    while (array[i][t] === 0) {
        i = Math.floor(Math.random() * (3 - 1) ) + 1;
        t = Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    console.log(i, t);
    return [i, t];
}