
//ejercicio A 

var img = new Image();

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
img.src = "code.png";
img.onload = function(){
    drawi (img , ctx)
     let datos = ctx.getImageData(0, 0, canvas.width , canvas.height);

    
function drawi (img){
    ctx.drawImage(img, 0, 0,500,500);
}
 blanco_negro (datos)
  }
  function setPixel (imageData, x, y, r, g, b, a){
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

function blanco_negro (datos){
    for (let x = 0 ; x < datos.width ; x++){
        for (let y =  0 ; y < datos.height ; y++){
            let colour = 255 / datos.width;
            r = colour * y;
            g = colour * y;
            b = colour * y;
            setPixel (imageData, x, y, r, g, b, a);
}}
ctx.drawImage(img, 0, 0,500,500);
}