/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let start = 1; // Lower bound (minimum possible speed)
    let end = Math.max(...piles); // Upper bound (maximum possible speed)

    while (start < end) {
        const mid = Math.floor((start + end) / 2); // Calculate the midpoint

        if (canEatAll(piles, H, mid)) {
            // If Koko can eat all bananas at mid speed, search left for slower speeds
            end = mid;
        } else {
            // If Koko cannot eat all bananas at mid speed, search right for faster speeds
            start = mid + 1;
        }
    }

    // When start and end converge, start will be the minimum speed Koko can eat all bananas
    return start;
}

function canEatAll(piles, H, speed) {
    let time = 0;

    for (let pile of piles) {
        time += Math.ceil(pile / speed); // Calculate time taken to eat all bananas in the pile at current speed
    }

    return time <= H; // Check if total time taken is within the given time limit
}