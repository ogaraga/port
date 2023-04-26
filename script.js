// Section for scientific calculator
function myinputs(nos) {
    let myScreen = document.getElementById("myscreen");
    myScreen.value += nos;
    
}
function myans(output){
    let myScreen = document.getElementById("myscreen");
    output = eval(myScreen.value);
    myScreen.value = output;

}
function myclearAll(){
    let myScreen = document.getElementById("myscreen");
    myScreen.value = '';
}
function mydelete(){
    let myScreen = document.getElementById("myscreen");
    myScreen.value = myScreen.value.slice(0, -1);
}
function mypercentage(percent){
    let myScreen = document.getElementById("myscreen");
    percent = eval(myScreen.value/100);
    myScreen.value = percent;
}
function myeulerno(e){
let myScreen = document.getElementById("myscreen");
let e;
e = Math.E;
myScreen.value = e;
}
function myexponential(exp){
    let myScreen =document.getElementById("myscreen");
    let e;
    e = Math.E;
    exp = Math.pow(e, myScreen.value);
    myScreen.value = exp;
}
function mysquarut(sqroot){
    let myScreen = document.getElementById("myscreen");
    sqroot = Math.sqrt(myScreen.value);
    myScreen.value = sqroot;
}
function mycubrut(cubrut){
    let myScreen = document.getElementById("myscreen");
    cubrut = Math.pow((myScreen.value), 1/3);
    myScreen.value = cubrut;
}
function mysquare(squareof){
    let myScreen = document.getElementById("myscreen");
    squareof = Math.pow(myScreen.value, 2);
    myScreen.value = squareof;
}
function mylogarithms(mylog) {
    let myScreen = document.getElementById("myscreen");
    mylog = Math.log10(myScreen.value);
    myScreen.value = mylog;
}
function myIns(In) {
    let myScreen = document.getElementById("myscreen");
    In = Math.log(myScreen.value);
    myScreen.value = In;
}
function myInv(Inv) {
    let myScreen = document.getElementById("myscreen");
    Inv = 1/(myScreen.value);
    myScreen.value = Inv;
}
function mydegrees(degs) {
    let myScreen = document.getElementById("myscreen");
    degs = (myScreen.value * 360);
    myScreen.value = degs;
}
function myPI(PI) {
    let myScreen = document.getElementById("myscreen");
    PI = Math.PI;
    myScreen.value = PI;
}

function mySin(sin) {
    let myScreen = document.getElementById("myscreen");
    const PI = Math.PI;
    sin = Math.sin(myScreen.value * Math.PI/180);
    myScreen.value = sin;
}

function myTan(tan) {
    let myScreen = document.getElementById("myscreen");
    const PI = Math.PI;
    tan = Math.tan(myScreen.value * Math.PI/180);
    myScreen.value = tan;
}

function myCos(cos) {
    let myScreen = document.getElementById("myscreen");
    const PI = Math.PI
    cos = Math.cos(myScreen.value * Math.PI/180);
    myScreen.value = cos;
}
function myRadian(rad){
    const PI = Math.PI
    myScreen = document.getElementById('myscreen');
    rad = eval(myScreen.value * Math .PI/180);
    myScreen.value = rad;
}
// section for simple calculator

function superbuttons(num) {
let myButtons;
myButtons = document.getElementById("myscreen1");
myButtons.value += num;
}
function mycleanser() {
    let cleaner;
    cleaner = document.getElementById("myscreen1");
    cleaner.value = "";
}
function myEqualTo(output) {
    let myEquals;
    myEquals = document.getElementById("myscreen1");
    output = eval(myEquals.value);
    myEquals.value = output;
}
