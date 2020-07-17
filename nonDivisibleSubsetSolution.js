function nonDivisibleSubset(k, s) {
    let n = s.length;
    // Array for storing frequency of modulo 
    // values 
    //console.log(k);
    let f = new Array(k);
    f.fill(0);

    // Fill frequency array with values modulo K 
    for (let i = 0; i < n; i++){
        let indice = s[i] % k;
        f[indice]+=1;
        //console.log(s[i]%k);
    }
    console.log(f);
    // if K is even, then update f[K/2] 
    if (k % 2 == 0)
        f[Math.floor(k / 2)] = Math.min(Math.floor(k / 2), 1);

    // Initialize result by minimum of 1 or 
    // count of numbers giving remainder 0 
    let res = Math.min(f[0], 1);

    // Choose maximum of count of numbers 
    // giving remainder i or K-i 
    for (let i = 1; i <= k / 2; i++)
        res += Math.max(f[i], f[k - i]);

    return res;
}


console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
console.log('expected 3')
console.log('----------------------------')
console.log(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));
console.log('expected 11')
console.log('----------------------------')
console.log(nonDivisibleSubset(7, [7]));
console.log('expected 0')