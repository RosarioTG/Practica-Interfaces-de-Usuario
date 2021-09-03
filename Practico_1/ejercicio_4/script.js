
   var ctx = document.querySelector("canvas").getContext("2d");

   var width = 150; 
   var height = 150;
   var imageData = ctx.createImageData(width, height);
   var r = 0;
   var g = 0;
   var b = 0;
   var a = 255; 
   
   
   function setPixel (imageData, x, y, r, g, b, a){
       index = (x + y * imageData.width) * 4;
       imageData.data[index+0] = r;
       imageData.data[index+1] = g;
       imageData.data[index+2] = b;
       imageData.data[index+3] = a;
   }
   
   function grediente (imageData, r, g, b, a){
       for (x = 0; x < width; x++){
           for (y = 0; y < height; y++){
               let colour = 255 / width;
               r = colour * y;
               g = colour * y;
               b = colour * y;
               setPixel (imageData, x, y, r, g, b, a);
           }
       }
   }
   
   grediente(imageData, r, g, b, a)
   ctx.putImageData(imageData, 0, 0);