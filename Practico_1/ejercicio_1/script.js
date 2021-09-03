let columnas = 2;
let filas = 2 ; 
function matrix () {
    let matrix = [];
    for (let i = 0 ; i < columnas; i++){
     matrix[i] = []  ;
     for (let x = 0 ; x <  filas ; x++) {
    matrix[i][x] =Math.random() * (15 - 1) + 1; 
    }
    }
    return matrix ; 
}




// ejerccio A
 let m = matrix () ; 
function valor_maximo (m){
    // console.log(m);
    let resultado = 0 ; 
    for ( let x = 0 ; x < columnas ; x ++){
        for (let y  = 0 ; y < filas ; y ++ ){
       if ( m[x][y] > resultado) {
                    resultado = m[x][y];
              }
            }
             
        }
return resultado ; 
}

// document.write(valor_maximo (m));

//ejercicio B

function maximo_x_fila (m){
    let resultado = 0 ; 
    let resultado_2 = []
    let p = 0 ; 
    console.log(m);
    for ( let x = 0 ; x < filas ; x ++){
         for (let y  = 0 ; y <  columnas ; y ++ ){
            if (x % 2 == 0){
      if (m[x][y] > resultado){
          resultado =  m[x][y]    
         }
        
  }
     
}  }
    return resultado_2         
}
document.write(maximo_x_fila(m));