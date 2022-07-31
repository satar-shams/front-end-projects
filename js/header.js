// left haeder
const divleft = document.createElement("div");
divleft.classList.add("header-left");

var a = document.createElement('a');
var linkText = document.createTextNode("Home");
a.appendChild(linkText);
a.title = "Home";
a.href = "/";

divleft.appendChild(a);


// right haeder
const divright = document.createElement("div");
divright.classList.add("header-right");


var a1 = document.createElement('a');
var linkText = document.createTextNode("About");
a1.appendChild(linkText);
a1.title = "About";
a1.href = "#";

var a2 = document.createElement('a');
var linkText = document.createTextNode("Contact");
a2.appendChild(linkText);
a2.title = "Contact";
a2.href = "#";

divright.appendChild(a1);
divright.appendChild(a2);

const header = document.getElementById("header")

header.appendChild(divleft);
header.appendChild(divright);