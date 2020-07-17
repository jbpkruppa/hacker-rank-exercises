function queensAttack(n, k, r_q, c_q, obstacles) {
    // case there is no obstacles:
    let left = c_q-1;
    let right = n-c_q;
    let up = n-r_q;
    let down = r_q-1;
    let up_left     = left<=up? left: up; 
    let up_right    = right<=up? right: up;
    let down_left   = left<=down? left: down; 
    let down_right  = right<=down? right: down;

    //case there is obstacles:
    for (let i =0; i < obstacles.length; i++){
        let row = obstacles[i][0];
        let col = obstacles[i][1];
        
        
        if (row == r_q && col<c_q) {
            if(c_q-col-1 < left) left = c_q-col-1;
        }
        else if (row == r_q && col>c_q) {
            if(col - c_q -1 < right) right = col-c_q - 1;
        }
        else if (row > r_q && col==c_q) {
            if(row-r_q-1 < up) up = row-r_q-1;
        }
        else if (row < r_q && col==c_q){ 
            if(r_q-row -1 < down) down = r_q-row-1;
        }
        else if (row > r_q && col < c_q){
            if (row-r_q == c_q-col) 
                if(row - r_q - 1 < up_left) up_left = row - r_q - 1;
        }
        else if (row > r_q && col > c_q){
            if (row-r_q == col-c_q) 
                if(row - r_q - 1 < up_right) up_right = row - r_q - 1;
        }
        else if (row < r_q && col < c_q){
            if (r_q-row == c_q-col) 
                if(r_q - row - 1 < down_left) down_left = r_q - row - 1;
        }
        else if (row < r_q && col > c_q){
            if (r_q-row == col-c_q) 
                if(r_q - row - 1 < down_right) down_right = r_q - row - 1;
        }
    }
    console.log(`left:      ${left}`);
    console.log(`right:     ${right}`);
    console.log(`up:        ${up}`);
    console.log(`down:      ${down}`);
    console.log(`up_left:   ${up_left}`);
    console.log(`up_right:  ${up_right}`);
    console.log(`down_left: ${down_left}`);
    console.log(`down_right:${down_right}`);

    return left + right + up + down + up_left + up_right + down_left + down_right;
}


console.log(queensAttack(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]));
console.log('expected 10')
console.log('==========================================')
console.log(queensAttack(4, 0, 3, 3, []));
console.log('expected 11')
console.log('==========================================')
console.log(queensAttack(4, 0, 4, 4, []));
console.log('expected 9')