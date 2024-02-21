/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    const mod = 1e9 + 7;
    const map = new Map();
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const comp = target - arr[i] - arr[j];
            if (map.has(comp)) {
                count = (count + map.get(comp)) % mod;
            }
        }
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }

    return count;
};