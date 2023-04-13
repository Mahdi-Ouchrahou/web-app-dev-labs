const buttons1 = document.getElementsByClassName("bordercolor");
const buttons2 = document.getElementsByClassName("borderstyle");
const buttons3 = document.getElementsByClassName("backgroundcolor");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const rat = document.getElementById("experiment");

buttons3[0].addEventListener('click', function () {
    setbackground("green");


}, false);

buttons3[1].addEventListener('click', function () {
    setbackground("red");

}, false);
buttons3[2].addEventListener('click', function () {
    setbackground("orange");

}, false);

buttons1[0].addEventListener('click', function () {
    setbordercolor("green");


}, false);

buttons1[1].addEventListener('click', function () {
    setbordercolor("red");

}, false);
buttons1[2].addEventListener('click', function () {
    setbordercolor("orange");


}, false);

buttons2[0].addEventListener('click', function () {
    setborderstyle("solid");

}, false);

buttons2[1].addEventListener('click', function () {
    setborderstyle("dotted");

}, false);
buttons2[2].addEventListener('click', function () {
    setborderstyle("dashed");

}, false);

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form1);
    var arg1 = formData.get("width") + "px";
    var arg2 = formData.get("height") + "px"
    widthandheight(arg1, arg2);
});

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form2);
    var arg1 = formData.get("border") + "px";
    setborder(arg1);
});

function setborder(style) {
    rat.style.borderWidth = style;
}

function widthandheight(width, height) {
    rat.style.height = height;
    rat.style.width = width;
}

function setbackground(style) {
    rat.style.backgroundColor = style;
}

function setborderstyle(style) {
    rat.style.borderStyle = style;
}
function setbordercolor(style) {
    rat.style.borderColor = style;
}
