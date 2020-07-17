// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
    let swaps = 0;
    let n =a.length;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let pri = a[j];
                let seg = a[j+1];
                a[j]=seg;
                a[j+1]=pri;
                swaps++;
            }
        }

    }
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);
}