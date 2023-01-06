// Switch between Player and Machine

// Variables
let playerBtn = document.getElementById("pvp-btn");
let machineBtn = document.getElementById("machine-btn");

let pvpDiv = document.getElementById("pvp-div");
let machineDiv = document.getElementById("machine-div");

// Event Listeners
playerBtn.addEventListener("click", switchToPvp);
machineBtn.addEventListener("click", switchToMachine);

// Functions
function switchToPvp() {
    pvpDiv.style.display = "block";
    machineDiv.style.display = "none";
    console.log("pvp displayed");
    gui = "player";
    resetEverything();
}

function switchToMachine() {
    machineDiv.style.display = "block";
    pvpDiv.style.display = "none";
    console.log("machine displayed");
    gui = "machine";
    resetEverything();
}