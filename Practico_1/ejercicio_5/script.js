let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let w =500 ;
let h = 500 ;
let ImageData = ctx.createImageData (w,h);

let r;
let g;
let b ;
let a ; 



function draw (ImageData,r,g,b,a){
     r = 255;
     g= 0;
     b = 255;
     a = 255 ;
    for (let x = 0 ; x < w ; x++){
        if (x <= w/2) {
         let coeficiente = 255/ (w/2) ;
          r = coeficiente * x;
          g= coeficiente * x;
          b = 0;
          a = 255 ; 
        } else {
            let coeficiente = 255 / (w/2) ;
             r = coeficiente * x;
             g = 2*(255 - (x/2*coeficiente)) ;
             b = 0;
             a = 255 ;
        }
        for (let y =  0 ; y < h ; y++){
            setPixel (ImageData, x, y, r, g, b, a)
        }
    }
    


}
 function setPixel (imageData, x, y, r, g, b, a){
     index = (x + y * imageData.width) * 4;
     imageData.data[index+0] = r;
     imageData.data[index+1] = g;
     imageData.data[index+2] = b;
     imageData.data[index+3] = a;
  }


draw (ImageData,r,g,b,a);
ctx.putImageData (ImageData,0,0);
   