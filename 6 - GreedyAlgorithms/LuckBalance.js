// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function luckBalance(k, contests) { //100%
    
    contests.sort((a,b)=>{
        if (a[1]<b[1]) return 1;
        else if (a[1]>b[1]) return 1;
        else{ // if a[1]==b[1]
            if(a[0]<b[0]) return 1;
            else return -1;
        }
    })
    //console.log(contests);

    let luckAcc = 0;
    for (let i = 0; i< contests.length; i++){
        if (contests[i][1]==0) luckAcc += contests[i][0]; //it is ok to loose
        else{
            if (k>0){ //it is ok to loose
                luckAcc += contests[i][0];
                k--;
            }else{ // not ok to loose, win
                luckAcc -= contests[i][0];
            }
        }
    }
    return luckAcc;
}
let k = 3;
let contests = [[5,1],[2,1],[1,1],[8,1],[10,0],[5,0]];
console.log(luckBalance(k,contests));
console.log('expected 29');