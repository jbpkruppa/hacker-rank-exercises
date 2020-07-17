// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
function processData(input) { // 100%
    //Enter your code here
    //console.log(input);
    let arr = input.split('\n');
    //console.log(arr);
    let n = arr[0];
    let queue = [];
    for (let i =1; i <= n; i++){
               
        let ins = arr[i].split(' ');
        if (ins[0] == 1) queue.push(ins[1]);
        else if (ins[0]==2) queue.shift();
        else if (ins[0]==3) console.log(queue[0]);
        
    }
} 