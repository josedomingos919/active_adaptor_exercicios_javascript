 
function comporValorSaque(valor){

 if(valor % 10 != 0){ 
     console.log("Não é um número multilo de 10")
     return false;
 }

 console.log("== cédulas ==");
 console.log(" Para 50: ", valor/50);
 console.log(" Para 20: ", valor/20);
 console.log(" Para 10: ", valor/10);
 
}

comporValorSaque(100);