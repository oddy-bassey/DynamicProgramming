'use strict'

// Memoization 

/*
* QUESTION:
* Say that you're a traveller on a 2D grid. you begin in the
* top-left corner and your goal is to travel to the bottom-right corner.
* you may only move down or right.
*
* In how many ways can you travel to the goal on a grid wiith dimensions m * n?
*/

const gridTravelerNotOptimized = (m, n) => {
  
    if(m == 1 && n ==1) return 1;
    if(m == 0 || n == 0) return 0;

    return gridTravelerNotOptimized(m-1, n, memo) + gridTravelerNotOptimized(m, n-1, memo); 
};

const gridTravelerOptimized = (m, n, memo = {}) => {

    const key = m + "," + n;
    // are the args in the mem

    if(key in memo) return memo[key];
    if(m == 1 && n ==1) return 1;
    if(m == 0 || n == 0) return 0;

    memo[key] = gridTravelerOptimized(m-1, n, memo) + gridTravelerOptimized(m, n-1, memo);

    return memo[key];
};

console.log(gridTravelerNotOptimized(1,1));
console.log(gridTravelerOptimized(2,3));
console.log(gridTravelerOptimized(3,2));
console.log(gridTravelerOptimized(18,18));