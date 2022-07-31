//initialization and functions 
var upper = false;
var shifitSignal = false;
var capsSignal = false;

function updateCase() {
    const keys = document.getElementsByClassName("keys");
    if (shifitSignal === true || capsSignal === true) {
        if (upper !== true) {
            for (key of keys) {
                key.classList.add("uppercase");
                upper = true;
            }
        }
    } else {
        if (upper !== false) {
            for (key of keys) {
                key.classList.remove("uppercase");
                upper = false;
            }
        }
    }
}

function shift() {
    shifitSignal = !shifitSignal;
    if (shifitSignal) {
        document.getElementById("shift").classList.add("active-btn");
    } else {
        document.getElementById("shift").classList.remove("active-btn");
    }
    updateCase(shifitSignal);
}

function caps() {
    capsSignal = !capsSignal;
    if (capsSignal) {
        document.getElementById("caps").classList.add("active-btn");
    } else {
        document.getElementById("caps").classList.remove("active-btn");
    }
    updateCase(capsSignal);
}

function removeShift() {
    if (shifitSignal) {
        shifitSignal = !shifitSignal;
        document.getElementById("shift").classList.remove("active-btn");
        updateCase(capsSignal);
    }
}

function addChar(a) {
    if (upper) {
        a = a.toUpperCase();
    }
    document.getElementById("text").value = document.getElementById("text").value + a;
    removeShift();
}

function removeChar() {
    document.getElementById("text").value = document.getElementById("text").value.slice(0, -1);
    removeShift();
}

function enter() {
    alert("Your message will be sent to sever\nmessage: " + document.getElementById("text").value)
}


// JavaScript HTML DOM Elements

const Keybrd = document.getElementById("keyboard");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");

var butCaps = document.createElement("button");
butCaps.innerHTML = "Caps";
butCaps.classList.add("func");
butCaps.setAttribute('id', 'caps');
butCaps.addEventListener("click", () => caps());
// <button class="func" value="" onclick="caps()" id="caps">caps</button>
div3.appendChild(butCaps);


var butShift = document.createElement("button");
butShift.innerHTML = "Shift";
butShift.classList.add("func");
butShift.setAttribute('id', 'shift');
butShift.addEventListener("click", () => shift());
// <button class="func" value="" onclick="shift()" id="shift">shift</button>
div4.appendChild(butShift);

const str = "1234567890qwertyuiopzxcvbnm,.?asdfghjkl";
var i = 1;
for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    var button = document.createElement("button");
    button.innerHTML = ch;
    button.classList.add("keys");
    button.addEventListener("click", () => addChar(ch));

    if (i > 29) {
        div3.appendChild(button);
    } else if (i > 19) {
        div4.appendChild(button);

    } else if (i > 9) {
        div2.appendChild(button);

    } else {
        div1.appendChild(button);
    }
}

// <button class="func" value="" onclick="removeChar()">del</button>

var butDel = document.createElement("button");
butDel.innerHTML = "Del";
butDel.classList.add("func");
// butDel.setAttribute('id', 'del');
butDel.addEventListener("click", () => removeChar());
div2.appendChild(butDel);

// <button class="func" value="" onclick="enter()">Enter</button>
var butEnter = document.createElement("button");
butEnter.innerHTML = "Enter";
butEnter.classList.add("func");
// butDel.setAttribute('id', 'del');
butEnter.addEventListener("click", () => enter());
div3.appendChild(butEnter);


const div = document.getElementById('board');
const divSpace = document.getElementById('space');

div.insertBefore(div1, divSpace);
div.insertBefore(div2, divSpace);
div.insertBefore(div3, divSpace);
div.insertBefore(div4, divSpace);