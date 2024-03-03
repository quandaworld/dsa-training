/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    // if n is 0, return true because there is no flower to plant
    if (n === 0) return true;

    // loop through flowerbed array while there are still flowers to plant
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
        // if current plot is empty and its prev and next plots are empty, one flower can be planted here 
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            // decrement number of unplanted flowers
            n--;
            // increment next plot to be considered
            i++;
        }
    }

    // return true if there is no flower left and return false otherwise
    return n === 0;
};