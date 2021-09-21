let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let firgures = [];
let tamaño = firgures.length;
let MouseDown = false ;
let lastClickedFigure = null;
function AgregarFiguras (){
    for (let i = 0 ; i < 1 ; i++ ){
     //  rect (); 
   circ ();
    
}
drawFigures ()
}

function circ (){
    let posX = Math.round(Math.random()* canvas.width);
let posY =  Math.round(Math.random()* canvas.height);
let color = colores ();
let circulo = new Circulo (posX , posY,20,color,ctx)
firgures.push(circulo);
}

function rect (){
let posX = Math.round(Math.random()* canvas.width);
let posY =  Math.round(Math.random()* canvas.height);
let color = colores ();
let rectan = new Rectangulo(posX,posY,30,30,color,ctx);

firgures.push(rectan);
}

    function drawFigures (){
        clearCanvas();
        let img = new Image ();
        img.src = "img.jpeg";
        img.onload= function (){
            for (let i = 0; i < firgures.length; i++ ){
                  firgures[i].fill = img;
                firgures[i].draw();
            }
        }
        
    }

    function drawFigure (){
        clearCanvas();
        for (let i = 0; i < firgures.length; i++ ){
               
                firgures[i].draw2();
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
         lastClickedFigure = null;
    }
    
    let clickFig = findClickedFigure(e.layerY,e.layerX);
    if (clickFig != null){
        lastClickedFigure = clickFig;
    }
    drawFigure();
}

function onmousemove (e){
   
    if (MouseDown && lastClickedFigure != null){
        lastClickedFigure.setPosicion(e.layerX,e.layerY);
        drawFigure();
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