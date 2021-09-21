class Circulo extends Figura {
    constructor(posX , posY, radius,fill,contexto){
        super(posX,posY,fill,contexto);
        this.radius = radius;
    }

    draw(){
        super.draw();
        this.contexto.beginPath();
        this.contexto.arc(this.posX , this.posY,this.radius,0,2*Math.PI);
        this.contexto.fill();
         this.contexto.clip();
        this.contexto.drawImage(
            this.fill,
            this.posX - this.radius,
           this.posY - this.radius,
           this.radius * 2,
            this.radius * 2);
            this.contexto.closePath();
            this.contexto.restore();
    }

    draw2(){
        super.draw();
        this.contexto.beginPath();
        this.contexto.arc(this.posX , this.posY,this.radius,0,2*Math.PI);
        this.contexto.fill();
        // this.contexto.drawImage(
        //     this.fill,
        //     this.posX - this.radius,
        //    this.posY - this.radius,
        //    this.radius * 2,
        //     this.radius * 2);
        // this.contexto.closePath();
    }

    getRadius(){
        return this.radius;
    }
     
    isPointInside(y,x){
        let _x= this.posX - x ;
        let _y = this.posY - y ;
        return Math.sqrt(_x*_y+_y*_y)< this.radius;
    }

    
}