'use strict'

// Memoization 

const fibNonOptimized = (n,  memo = {}) => { 
    if (n <= 2) return 1;
    return fibNonOptimized(n-1, memo) + fibNonOptimized(n-2, memo);
};

const fibOptimized = (n,  memo = {}) => {

    if(n in memo) return memo[n];

    if (n <= 2) return 1;
    memo[n] = fibOptimized(n-1, memo) + fibOptimized(n-2, memo);

    return memo[n];
};

console.log(fibNonOptimized(6));
console.log(fibOptimized(7));
console.log(fibOptimized(8)); 
console.log(fibOptimized(50)); 