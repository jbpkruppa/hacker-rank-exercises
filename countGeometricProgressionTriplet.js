// Complete the countTriplets function below.
function countTriplets(arr, r) {
    
    let mp2 = {};
    let mp3 = {};
    let count = 0;

    arr.forEach(val => {
        if(mp3.hasOwnProperty(val))
            count += mp3[val];

        if(mp2.hasOwnProperty(val))
            mp3[val*r] = (mp3[val*r] += mp2[val]) || mp2[val];
        
        mp2[val*r] = (mp2[val*r] += 1) || 1 ;
    });

    return count;
}




function countTripletsComErros(arr, r) {
    console.log(arr);
    let unicos = [...new Set(arr)];
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < unicos.length; i++) {
        let pri = unicos[i];
        let seg = unicos[i] * r;
        let terc = unicos[i] * r * r;
        console.log(`pri: ${pri}, seg: ${seg}, terc: ${terc}`);
        let primeiros = arr.filter(numero => numero == pri).length;

        let n = 0;
        if (pri == seg == terc) {
            n = primeiros * (primeiros - 1) * (primeiros - 2);
        } else {
            let segundos = arr.filter(numero => numero == seg).length;
            let terceiros = arr.filter(numero => numero == terc).length;
            n = primeiros * segundos * terceiros;
            console.log(`achados = ${primeiros}x${segundos}x${terceiros} = ${n}`);
        }

        console.log(n);
        count += n;
    }
    return count;
}


/* console.log(countTriplets([ 1, 2, 2, 4 ],2));
console.log('expected 2');
console.log('----------------------------------')

console.log(countTriplets([ 1, 3, 9, 9, 27, 81 ],3));
console.log('expected 6');
console.log('----------------------------------')

console.log(countTriplets([ 1, 5, 5, 25, 125 ] ,5));
console.log('expected 4');
console.log('----------------------------------') */

console.log(countTriplets(new Array(100).fill(1), 1));
console.log('expected 161700');
console.log('----------------------------------')