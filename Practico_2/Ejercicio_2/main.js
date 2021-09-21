let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let firgures = [];
let tamaño = firgures.length;
let MouseDown = false ;
let lastClickedFigure = null;
function AgregarFiguras (){
    for (let i = 0 ; i < 15 ; i++ ){
       rect (); 
     circle ();
    // triangulo = new Triangulo (320,320,220,220,520,320,"#000000", ctx);
    // triangulo.draw();
    // trianguo = new Triangulo (160,160,210,210,260,160,"#9775AA", ctx);
    // trianguo.draw();
    // // trianguo = new Triangulo (200,200,150,150,100,10,"#000000", ctx);
    // // trianguo.draw();
}
 drawFigures ()
}

function rect (){
let posX = Math.round(Math.random()* canvas.width);
let posY =  Math.round(Math.random()* canvas.height);
let color = colores ();
let rectan = new Rectangulo(posX,posY,20,20,color,ctx);

firgures.push(rectan);
}


function circle (){
    let posX = Math.round(Math.random()* canvas.width);
    let posY =  Math.round(Math.random()* canvas.height);
    let color = colores ();
    let circu = new Circulo(posX,posY,20,color,ctx);
    
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