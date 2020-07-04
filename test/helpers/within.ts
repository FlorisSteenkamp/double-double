
/**
 * Returns true if the second given double is within the first double by the 
 * given number of ulps, false otherwise.
 * 
 * * used in tests
 */
function within(exactValue: number, estimate: number, ulps: number) {
    // if exactValue === 0 the relative error is undefined, i.e. the condition
    // number is infinite.
    if (exactValue === 0) { 
        return estimate === 0; 
    }

    // if the estimate is 0 the number of ulps can never be reached
    if (estimate === 0) { 
        return false; 
    }
    
    let c = exactValue - estimate;

    return Math.abs(c/exactValue) <= ulps * Number.EPSILON;
}


export { within }
