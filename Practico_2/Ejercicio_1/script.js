let canvas = document.querySelector('#canvas');
let contexto = canvas.getContext('2d');

for (let i = 0 ; i < 15 ; i++ ){
    contexto.fillStyle =  color ();
    contexto.beginPath();
    contexto.arc(Math.round(Math.random()*canvas.width ),Math.round(Math.random()*canvas.height),20,0,2*Math.PI);
    contexto.fill();
    contexto.closePath();
}

function color (){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}