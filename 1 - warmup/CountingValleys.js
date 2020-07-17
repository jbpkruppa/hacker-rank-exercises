function countingValleys(n, s) {
    let ar =s.split('');
    let nivel = 0;
    let vezes = 0;
    let iniciado = false;

    for(let i =0; i < ar.length; i++){
        let ultimoNivel = nivel;
        if(ar[i]=='U') nivel++;
        else nivel--;
        if (ultimoNivel==0 && nivel<0) iniciado = true;
        if (ultimoNivel<0 && nivel==0 && iniciado){
            vezes++;
            iniciado = false;
        }
    }
    return vezes;
}