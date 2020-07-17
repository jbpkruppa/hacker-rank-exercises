// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) { //100%
    for (let i = 0; i< note.length; i++){
        let index = magazine.indexOf(note[i]);
        if (index == -1) return 'No';
        else{
            magazine.splice(index,1);
        }
    }
    return 'Yes';
}
let magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
let note = [ 'give', 'one', 'grand', 'today' ]
console.log(checkMagazine(magazine, note));
console.log('expected Yes');