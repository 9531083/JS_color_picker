let rRange = document.querySelector('.red-range');
let gRange = document.querySelector('.green-range');
let bRange = document.querySelector('.blue-range');

let randomBtn = document.querySelector('.random-btn')

let header = document.querySelector('#header');


let body = document.querySelector('body')

function setColor() {
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;

    body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'

    header.innerHTML = 'the color ID is: rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    if (redValue < 50 && greenValue < 50 && blueValue < 50) {
        header.style.color = 'white';
    } else {
        header.style.color = 'black';
    }

}
function randomMaker() {
    let randNum1 = Math.floor(Math.random() * 256);
    let randNum2 = Math.floor(Math.random() * 256);
    let randNum3 = Math.floor(Math.random() * 256);

    let arrayOfColors = [randNum1, randNum2, randNum3];
    return arrayOfColors;
}

rRange.addEventListener('input', function () {
    setColor();
})

gRange.addEventListener('input', function () {
    setColor();
})

bRange.addEventListener('input', function () {
    setColor();
})

randomBtn.addEventListener('click', function () {

    let randomColor = randomMaker();
    // body.style.backgroundColor = 'rgb(' + randomColor[0] + ',' + randomColor[1] + ',' + randomColor[2] + ')';

    rRange.value = randomColor[0];
    gRange.value = randomColor[1];
    bRange.value = randomColor[2];
    setColor();
})

