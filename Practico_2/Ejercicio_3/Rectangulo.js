class Rectangulo extends Figura {
    constructor(posX , posY, width,heigth,fill,contexto){
        super(posX,posY,fill,contexto);
        this.width = width;
        this.heigth = heigth;
    }


    draw (){
        super.draw();
        this.contexto.drawImage (this.fill,this.posY ,this.posX, this.width,   this.heigth );
        this.contexto.closePath();
        
    }

    getWidth(){
        return this.width;
    }
    setposy(p){
        return this.posY = p;
    }

    setposx(p){
        return this.posX = p
    }

    getHeight(){
        return this.heigth;
    }

    isPointInside(x,y){
        return !(x<this.posX || x > this.posX + this.width || y<this.posY || y > this.posY + this.heigth)
    }
}