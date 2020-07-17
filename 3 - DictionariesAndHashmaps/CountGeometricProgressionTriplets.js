// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function countTriplets(arr, r) {
    
    let mp2 = {};
    let mp3 = {};
    let count = 0;

    arr.forEach(val => {
        if(mp3.hasOwnProperty(val))
            count += mp3[val];

        if(mp2.hasOwnProperty(val))
            mp3[val*r] = (mp3[val*r] += mp2[val]) || mp2[val];
        
        mp2[val*r] = (mp2[val*r] += 1) || 1 ;
    });

    return count;
}