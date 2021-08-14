function trigger (value = "") {
    let qtPalavras = 0, status = true;

    value.split(' ').forEach(e=> {
        if(e.length >= 2)
            qtPalavras++
    });

    const qtCaracter = value.split(' ').join('').length;

    if(qtCaracter > 255) {
        console.error("Passou o limite de caracter!");
        status = false;
    }

    return {
        qtPalavras,
        status
    }; 
}

console.log( trigger("o josé é bom")  ) ;