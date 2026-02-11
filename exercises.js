// Counter Functions 
let counter = 0;
function updateCounterDisplay() {
    document.getElementById("counter").textContent = counter;
}
function tickUp() {
    counter++;
    updateCounterDisplay();
}
function tickDown() {
    counter--;
    updateCounterDisplay();
}

// For Loop for Numbers
function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i;
        if (i < counter) {
            result += " ";
        }
    }
    document.getElementById("forLoopResult").textContent = result;
}

// Odd Numbers
function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            if (result !== "") {
                result += " ";
            }
            result += i;
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
}

// Arrays
function addMultiplesToArray() {
    let arr = [];
    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

// Print Car Objects in Fields
function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };
    console.log(car);
}

// Load Car Objects from Footer
function loadCar(num) {
    let chosenCar;
    if (num === 1) {
        chosenCar = carObject1;
    } else if (num === 2) {
        chosenCar = carObject2;
    } else if (num === 3) {
        chosenCar = carObject3;
    }
    document.getElementById("carType").value = chosenCar.cType;
    document.getElementById("carMPG").value = chosenCar.cMPG;
    document.getElementById("carColor").value = chosenCar.cColor;
}

// Change Text Color
function changeColor(num) {
    let p = document.getElementById("styleParagraph");
    if (num === 1) {
        p.style.color = "red";
    } else if (num === 2) {
        p.style.color = "green";
    } else if (num === 3) {
        p.style.color = "blue";
    }
}