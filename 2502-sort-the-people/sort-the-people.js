/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const people = [];
    for (let i = 0; i < names .length; i++) {
        people.push([names[i], heights[i]]);
    }
    people.sort((a, b) => b[1] - a[1]);
    names = [];
    people.forEach(([name, height]) => {
        names.push(name);
    });
    return names;
};