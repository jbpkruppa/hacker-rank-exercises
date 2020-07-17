// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function whatFlavors(cost, money) {
    // using hash to find second on big cases, avoiding using indexOf too much
    let hash = {};
    for (let i =0; i < cost.length; i++){
        hash[cost[i]] = hash[cost[i]]!=undefined?hash[cost[i]]+1: 1;
    } 
    //console.log(hash);
    for (let i =0; i < cost.length; i++){
        let first = cost[i];
        let second = money - first;
        if (hash[second]!=undefined){
            if (first!=second){
                console.log(`${i+1} ${cost.indexOf(second)+1}`);
                return;
            }else{
                if (hash[second]>1){
                    console.log(`${i+1} ${cost.indexOf(second,i+1)+1}`);
                    return;
                }
            }
        }
    }
}

let cost = [ 1, 4, 5, 3, 2 ]
let money = 4;

console.log(whatFlavors(cost, money));
console.log('expected 1 4')
console.log('-------------------------------');

cost = [ 2, 2, 4, 3 ]
money = 4;
console.log(whatFlavors(cost, money));
console.log('expected 1 2')
console.log('-------------------------------');

cost = [ 1, 2, 3, 5, 6 ]
money = 5;
console.log(whatFlavors(cost, money));
console.log('expected 2 3')
console.log('-------------------------------');

cost = [ 4, 3, 2, 5, 7 ]
money = 8;
console.log(whatFlavors(cost, money));
console.log('expected 2 4')
console.log('-------------------------------');

cost = [ 7, 2, 5, 4, 11 ]
money = 12;
console.log(whatFlavors(cost, money));
console.log('expected 1 3')
console.log('-------------------------------');