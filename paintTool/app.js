const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const CANVAS_SIZE = 700;
const INITAL_COLOR = "black";

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;


ctx.strokeStyle = "INITAL_COLOR";
ctx.fillStyle = "INITAL_COLOR";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0, 0,canvas.width,canvas.height);
    }
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}



function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }

}


Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick));

if(range){
    range.addEventListener("input",handleRangeChange);
} 

if(mode){
    mode.addEventListener("click",handleModeClick)
}