const onMouseMove = (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    if (!painting) {
        context.beginPath();
        context.moveTo(x, y);
    } else {
        context.lineTo(x, y);
        context.stroke();
    }
}

const onMouseDown = (event) => {
    painting = true;
}

const stopPainting = () => {
    painting = false;
}

const startPainting = () => {
    painting = true;
}

const changeColor = (event) => {
    let color = event.target.value;
    context.strokeStyle = color;
}

const changeSize = (event) => {
    let size = event.target.value;
    console.log(size);
    context.lineWidth = size;
}

let painting = false;
let canvas = document.getElementById("MyCanvas");
canvas.height = 600;
canvas.width = 1280;
canvas.fillStyle = 'white';
let context = canvas.getContext('2d');
context.lineWidth = 2.5;
context.strokeStyle = 'black';
let colors = document.getElementsByTagName('button');
let size = document.getElementById('size');

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting)
}

if (size) {
    size.addEventListener('input', changeSize);
}

Array.from(colors).forEach(color => color.addEventListener('click', changeColor));