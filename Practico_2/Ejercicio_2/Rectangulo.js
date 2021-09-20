class Rectangulo extends Figura {
    constructor(posX , posY, width,heigth,fill,contexto){
        super(posX,posY,fill,contexto);
        this.width = width;
        this.heigth = heigth;
    }


    draw (){
        super.draw();
        this.contexto.fillRect(this.posX,this.posY,this.width,this.heigth);
        
    }

    getWidth(){
        return this.width;
    }


    getHeight(){
        return this.heigth;
    }

    isPointInside(x,y){
        return !(x<this.posX || x > this.posX + this.width || y<this.posY || y > this.posY + this.heigth)
    }
}