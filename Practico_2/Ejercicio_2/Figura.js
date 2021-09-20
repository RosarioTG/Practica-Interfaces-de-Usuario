class Figura {
    constructor(posX , posY ,fill , contexto){
        this.posX = posX;
        this.posY = posY;
        this.fill = fill ;
        this.contexto = contexto;
        
    }


    setFill(fill){
        this.fill = fill;
    }

    setPosicion(x,y){
        this.posX= x ;
        this.posY= y ;
    
    }
    getPosition(){
        return{
            x:this.getPosX(),
            y:this.getPosY()
        };
    }

    getPosX(){
        return this.posX;
    }


    getPosY(){
        return this.posY;
    }


    getFill (){
        return this.fill;  
      }


      draw(){
          this.contexto.fillStyle = this.fill;
      }

      isPointInside(x,y){};
}