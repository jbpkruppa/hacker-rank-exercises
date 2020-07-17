function taumBday(b, w, bc, wc, z) {
    // Write your code here
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);
    
    let custo;
    //case 1, black is more expensive then change to white
    if (bc > wc && (wc + z) < bc) {
        custo = BigInt((b * wc) + (w * wc) + (b * z));
    }
    else if (wc > bc && (bc + z) < wc)//case 2, white is more expensive
    {
        custo = BigInt((b * bc) + (w * bc) + (w * z));
    }else{
        custo = BigInt((b * bc) + (w * wc));
    }

    

    return (''+custo).replace('n','');
}

console.log(taumBday(10,0, 10, 5, 4));
console.log('expected 20');