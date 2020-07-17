
function compare(arr){
    arr.sort((a,b)=>{
        if (a.score>b.score) return -1;
        else if(a.score<b.score) return 1;
        else {
            if (a.name<b.name) return -1;
            else if(a.name>b.name) return 1;
            else return 0;
        }
    });
    return arr;
}

let playerA = {
    name: "amy",
    score: 100
}

let playerB = {
    name: "david",
    score: 100
}

let playerC = {
    name: "heraldo",
    score: 50
}

let playerD = {
    name: "aakansha",
    score: 75
}

let playerE = {
    name: 'aleksa',
    score: 150
}

console.log(compare([playerA, playerB, playerC, playerD, playerE]));
