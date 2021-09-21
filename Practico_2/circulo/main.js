let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let firgures = [];
let tamaño = firgures.length;
let MouseDown = false ;
let lastClickedFigure = null;
function AgregarFiguras (){
    for (let i = 0 ; i < 15 ; i++ ){
    
     circle ();
    
}
drawFigures ()
}

function circle (){
    let posX = Math.round(Math.random()* canvas.width);
    let posY =  Math.round(Math.random()* canvas.height);
    let color = colores ();
    let circu = new Circulo(posX,posY,40,color,ctx);
    
    firgures.push(circu);
    }

    function drawFigures (){
        clearCanvas();
        for (let i = 0; i < firgures.length; i++ ){
            firgures[i].draw();
        }
    }
function clearCanvas(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
function colores (){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function onmousedown (e){
    MouseDown = true;
    if (lastClickedFigure != null){
        // lastClickedFigure.setResaltado(false);
        lastClickedFigure = null;
    }
    let clickFig = findClickedFigure(e.layerX,e.layerY);
    if (clickFig != null){
        lastClickedFigure = clickFig;
    }
    drawFigures ();
}

function onmousemove (e){
   
    if (MouseDown && lastClickedFigure != null){
        lastClickedFigure.setPosicion(e.layerX,e.layerY);
        drawFigures();
    }

}

function onmouseup (e){
    MouseDown = false;
}

function findClickedFigure(x,y){
    for (let i= 0 ; i< firgures.length; i++){
        const elemento = firgures[i];
        if (elemento.isPointInside(x,y)){
            return elemento;
        }
    }
}



canvas.addEventListener('mousedown', onmousedown,false);
canvas.addEventListener('mouseup', onmouseup,false);
canvas.addEventListener('mousemove', onmousemove, false);
document.addEventListener("DOMContentLoaded",AgregarFiguras());