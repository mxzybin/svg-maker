let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');

let width = document.querySelector('#width');
let height = document.querySelector('#height');
let square = document.querySelector('.square');
let tl = document.querySelector('#tl');
let tr = document.querySelector('#tr');
let br = document.querySelector('#br');
let bl = document.querySelector('#bl');

let tlpx = document.querySelector('#tlpx');
let trpx = document.querySelector('#trpx');
let brpx = document.querySelector('#brpx');
let blpx = document.querySelector('#blpx');

let buttonSvg = document.querySelector('.get__svg');
let buttonCss = document.querySelector('.get__css');
let area = document.querySelector('.css__area');
let codeArea = document.querySelector('.svg__area');
let trans = document.querySelector('#transperent')

red.addEventListener('input', rD);
green.addEventListener('input', gR);
blue.addEventListener('input', bLue);

width.addEventListener('input', sW);
height.addEventListener('input', sH);

tl.addEventListener('input', tL);
tr.addEventListener('input', tR);
br.addEventListener('input', bR);
bl.addEventListener('input', bL);

function rD(params) {
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
}
function gR(params) {
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
}
function bLue(params) {
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
}

function sW(params) {
    square.style.width = width.value +'px';
}

function sH(params) {
    square.style.height = height.value +'px';
}

function tL(params) {
    square.style.borderTopLeftRadius = tl.value + '%'
}
function tR(params) {
    square.style.borderTopRightRadius = tr.value + '%'
}
function bR(params) {
    square.style.borderBottomRightRadius = br.value + '%'
}
function bL(params) {
    square.style.borderBottomLeftRadius = bl.value + '%'
}
buttonCss.addEventListener('click', showResults);
function showResults(params) {
    
}
function showResults(params) {
    area.innerHTML =
    `  background-color: ${square.style.backgroundColor};</br>`+
    `  width: ${square.style.width};</br>`+
    `  height: ${square.style.height};</br>`+
    `  border-top-left-radius: ${square.style.borderTopLeftRadius};</br>`+
    `  border-top-right-radius: ${square.style.borderTopRightRadius};</br>`+
    `  border-bottom-right-radius: ${square.style.borderBottomRightRadius};</br>`+
    `  border-bottom-left-radius: ${square.style.borderBottomLeftRadius};</br>`+
    `}`;
}


let inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
input.addEventListener('input', showResults);
}

tlpx.addEventListener('input', tLpx);
trpx.addEventListener('input', tRpx);
brpx.addEventListener('input', bRpx);
blpx.addEventListener('input', bLpx);

function tLpx(params) {
    square.style.borderTopLeftRadius = tlpx.value + 'px'
}
function tRpx(params) {
    square.style.borderTopRightRadius = trpx.value + 'px'
}
function bRpx(params) {
    square.style.borderBottomRightRadius = brpx.value + 'px'
}
function bLpx(params) {
    square.style.borderBottomLeftRadius = blpx.value + 'px'
}

buttonSvg.addEventListener('click', showCode);
function showCode(params) {
    codeArea.innerHTML = document.querySelector('.square__container').innerHTML;
}
