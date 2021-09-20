class Triangulo extends Figura {
    constructor(posX , posY, posX_2,posY_2, posX_3,posY_3,fill,contexto){
        super(posX,posY,fill,contexto);
       this.posX_2 = posX_2;
       this.posY_2 = posY_2;
       this.posX_3 = posX_3;
       this.posY_3 = posY_3;
    }

    draw (){
       this.contexto.beginPath();
       this.contexto.moveTo(this.posX,this.posX);
       this.contexto.lineTo(this.posX_2,this.posY_2);
       this.contexto.lineTo(this.posX_3,this.posY_3);
       this.contexto.fill();
    }
   

   
}