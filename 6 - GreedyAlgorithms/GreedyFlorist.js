// https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen

function getMinimumCost(k, c) { // passed all
    c.sort((a, b) => b-a);
    let numberOfFlowers = c.length;
    let total = 0;
    for (let i = 0; i< numberOfFlowers; i++){
        total += (parseInt(i / k) + 1) * c[i];
    }
        
    return total
}

function firstGetMinimumCost(k, c) { // passed only in the firsts
    c.sort((a, b) => a - b);
    let numberOfFlowers = c.length;
    let start = 0;
    let spent = 0;
    if (numberOfFlowers > k) {
        start = numberOfFlowers % k;
    }
    //console.log(start);
    let prevPurc = new Array(k).fill(0);
    let curr = start;
    for (let i = start; i < numberOfFlowers; i++) {
        let cost = (prevPurc[curr] + 1) * c[i];
        spent += cost;
        prevPurc[curr] += 1;
        if (curr == k - 1) curr = 0
        else curr++;

    }
    for (let i = 0; i < start; i++) {
        let cost = (prevPurc[curr] + 1) * c[i];
        spent += cost;
        prevPurc[curr] += 1;
        if (curr == k - 1) curr = 0
        else curr++;
    }
    return spent;
}

console.log(getMinimumCost(2, [2, 5, 6]));
console.log('expected 15');

let s = '390225 426456 688267 800389 990107 439248 240638 15991 874479 568754 729927 980985 132244 488186 5037 721765 251885 28458 23710 281490 30935 897665 768945 337228 533277 959855 927447 941485 24242 684459 312855 716170 512600 608266 779912 950103 211756 665028 642996 262173 789020 932421 390745 433434 350262 463568 668809 305781 815771 550800'
let c = s.split(' ');
console.log(getMinimumCost(3, c));
console.log('expected 163578911');