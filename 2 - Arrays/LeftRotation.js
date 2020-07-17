function rotLeft(a, d) {
    if (d%a.length==0) return a;
    for (let i =0; i <d; i++){
        let first = a.shift();
        a.push(first)
    }
    return a;
}