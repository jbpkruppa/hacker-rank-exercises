// https://www.hackerrank.com/challenges/min-max-riddle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

function solve(arr){ //100%
    const answer = [];
    const dict = {};
    const reversed = {};
    const n = arr.length;

    for (let currPos = 0; currPos < n; currPos++) {
        let leftPos = currPos, rightPos = currPos;
        while (leftPos >= 0 && arr[leftPos] >= arr[currPos]) {
            leftPos--;
        }
        while (rightPos <= n && arr[rightPos] >= arr[currPos]) {
            rightPos++;
        }
        dict[arr[currPos]] = Math.max(dict[arr[currPos]] || 0, rightPos - (leftPos + 1));
    }

    for (const [key, value] of Object.entries(dict)) {
        reversed[value] = Math.max(reversed[value] || 0, key);
    }

    const sortedReversed = Object.keys(reversed).reduce((acc, key) => {
        const k = parseInt(key, 10);
        return [...acc, [k, reversed[k]]];
    }, []);
    sortedReversed.sort((a, b) => a[1] - b[1]);

    for (const [pos, value] of sortedReversed) {
        let currentPos = 0;
        while (currentPos < pos) {
            answer[currentPos] = value;
            currentPos++;
        }
    }

    return answer;
}

function solve(arr) { // solved 7/8 cases. One got timeout
    // try t solve using caterpillar method
    let left = 0;
    let right = left;
    let mins = new Array(arr.length).fill(0);
    for (left; left<arr.length; left++){
        let min = arr[left];
        for (right = left; right<arr.length; right++){
            if(arr[right]<min) min = arr[right];
            mins[right-left] = Math.max(mins[right-left], min);
        }

    }
    return mins;
}

arr = [2, 6, 1, 12]
console.log(solve(arr));
console.log( 'expected 12 2 1 1')