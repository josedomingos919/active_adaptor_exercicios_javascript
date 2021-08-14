
function razao(a,b){

    if(b == 0) {
        console.error("Tentativa de divisão por 0");
        return null;
    }
        
    return a/b;
}

console.log( razao(1,0) );
