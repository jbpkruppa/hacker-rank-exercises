// https://www.hackerrank.com/challenges/minimum-time-required/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function minTime(machines, goal) { // using binarysearch. 13/13 passed
    const min = Math.min(...machines);
    const max = Math.max(...machines);
    let minDay = Math.ceil(goal / machines.length) * min;
    let maxDay = Math.ceil(goal / machines.length) * max;
    const getSum = (arr, d) => arr.reduce((total, machine) => total + Math.floor(d / machine), 0);
    while (minDay < maxDay) {
        const day = Math.floor((maxDay + minDay) / 2);
        const sum = getSum(machines, day);
        if (sum >= goal) {
            maxDay = day;
        }
        else {
            minDay = day + 1;
        }
    }
    return minDay;

}

function firstMinTime(machines, goal) { // 8/13 passed. 5/13 not pased due to timeout
    let counter = 0;
    let days = 1;
    while (counter < goal) {
        for (let j = 0; j < machines.length; j++) {
            //console.log(`days: ${days}, machine[${j}]=${machines[j]}`);
            if (days % machines[j] == 0) {
                counter++;
                if (counter == goal) return days;
            }

        }
        days++;
    }
    return days;
}

let m = [2, 3];
let g = 5;

console.log(minTime(m, g));
console.log('expected 6');

m = [1, 3, 4];
g = 10;

console.log(minTime(m, g));
console.log('expected 7');

m = [4, 5, 6];
g = 12;

console.log(minTime(m, g));
console.log('expected 20');

