function appendAndDelete(s, t, k) {
    console.log(s);
    console.log(t);
    console.log(k);
    let i = 0;
    let indiceReinicio;

    if ((s.length+t.length)<k) return 'Yes';
    if(s==t){
        if (k%2) return 'No';
        else return 'Yes';
    }

    for (i; i < t.length; i++){
        if (s.length>i) {
            if (s[i] != t[i]) {
                indiceReinicio = i;
                break;
            }
            
        }else{
            indiceReinicio = i-1; //TESTAR!!!!
            break;
        }
    }
    if (indiceReinicio==undefined){
        //a palavra t é igual ao inicio da palavra s
        indiceReinicio = i-1;
    }
    
    console.log(`indiceReinicio: ${indiceReinicio}`);
    
    let diferencaS = s.length - indiceReinicio;
    let diferencaT = t.length - indiceReinicio;
    console.log(`diferencaS: ${diferencaS}`);
    console.log(`diferencaT: ${diferencaT}`);
    if (Math.abs(diferencaS)>k) return 'No';
    
    else{
        
        if (diferencaS<0) {//somente acrescer
            console.log('somente acrescer');
            if (k%2) return "yes";
            else return 'No';
        } else if (diferencaS == 0) {// somente remover
            console.log('somente remover');
            if (k%2) return "Yes";
            else return 'No';
        }else{ //remover e acrescer
            console.log('remover e acrescer');
            if (k<(diferencaS+diferencaT)) return 'No'
            if (k==(diferencaS+diferencaT)) return 'Yes'
            console.log(`sobra: ${k-diferencaS}`);
            if ((k-diferencaS)%k) return 'No';
            else return 'Yes';
        }
    }
}

console.log(appendAndDelete('qwerasdf', 'qwerbsdf', 6));
console.log('expected No');
console.log('--------------------------------');
console.log(appendAndDelete('hackerhappy', 'hackerrank', 9));
console.log('expected Yes');
console.log('--------------------------------');
console.log(appendAndDelete('abcd', 'abcdert', 10));
console.log('expected No');
console.log('--------------------------------');
console.log(appendAndDelete('uoiauwrebgiwrhgiuawheirhwebvjforidkslweufgrhvjqasw', 'vgftrheydkoslwezxcvdsqjkfhrydjwvogfheksockelsnbkeq', 100));
console.log('expected ');