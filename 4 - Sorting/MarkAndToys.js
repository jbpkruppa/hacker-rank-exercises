// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function maximumToys(prices, k) {
    let spent =0;
    let toys = 0;
    prices.sort((a,b)=>a-b);
    for (let i =0; i <prices.length; i++){
        if (spent+prices[i]<=k) {
            toys++;
            spent += prices[i];
        } else{
            break;
        }
        //console.log(`toys: ${toys}, spent: ${spent}`)
    }
    return toys;
}