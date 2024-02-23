/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let remainderArr = new Array(60).fill(0);
    let pair = 0;

    for (let num of time) {
        let remainder = num % 60;
        pair += remainderArr[(60 - remainder) % 60]; 
        remainderArr[remainder]++;
    }

    return pair;
};