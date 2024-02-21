/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    strs.forEach((str, index) => {
        const sortedStr = str.split('').sort().join('');
        map.set(sortedStr, (map.get(sortedStr) || []).concat([strs[index]]));
    });

    return [...map.values()];
};