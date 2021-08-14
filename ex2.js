function getTriangulo(x,y,z){

    if( x > 0 && y > 0 && z > 0 ) {

        if(x == y && y == z){
            console.log("O triangulo é equilátero!");
            return;
        } else if( x==y || x==z  || z==y){
            console.log("O triangulo é isósceles!");
        }else {
            console.log("O triangulo é escaleno!");
        }

    }else{
        console.log("Números Invalidos!")
    }
}

getTriangulo(4, 3, 3);
 

