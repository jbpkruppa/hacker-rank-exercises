//https://www.hackerrank.com/challenges/triple-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
function triplets(a, b, c) {
    for (let i of [a, b, c]) {
        i.sort((a, b) => a - b)
    }
    a = [...new Set(a)]
    b = [...new Set(b)]
    c = [...new Set(c)]

    let bi = 0;
    let ai = 0;
    let ci = 0;
    let total = 0;
    while (bi < b.length && b[bi] != b[bi - 1]) {
        while (ai < a.length && a[ai] <= b[bi]) {
            ai++
        }
        while (ci < c.length && c[ci] <= b[bi]) {
            ci++
        }
        total += ai * ci;
        bi++
    }
    return total;
}

function firstTriplets(a, b, c) { // 5/9 correct. timeout problem
    a.sort((a, b) => a - b);
    b = [...new Set(b)];
    c.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < b.length; i++) {
        let filterA = a.filter((a) => a <= b[i]).length;
        let filterC = c.filter((c) => c <= b[i]).length;
        console.log(`${filterA} x ${filterC} = ${filterA * filterC}`);
        counter += filterA * filterC;
    }
    return counter;
}


let a = [1, 3, 5];
let b = [2, 3];
let c = [1, 2, 3];
console.log(triplets(a, b, c));
console.log('expected 8');

a = [1, 4, 5];
b = [2, 3, 3];
c = [1, 2, 3];
console.log(triplets(a, b, c));
console.log('expected 5');

