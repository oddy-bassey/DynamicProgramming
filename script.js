'use strict'

// Memoization 

/*
* QUESTION:
* Write a function 'canSUm(targetSum, numbers)' that takes in a targetSum
* and an array of numbers as arguements.
* 
* The function should return a boolean indicating whether or not it is possible
* to generate the targetSum using numbers from the Array.
* 
* NOTE
* You may use an element of the array as many times as needed.
* you may assume that all input numbers are nonnegative.
*/
 
const canSumNotOptimized = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum-num;
        if(canSumNotOptimized(remainder, numbers) === true) return true;
    }

    return false;
}

const canSumOptimized = (targetSum, numbers, memo = {}) => {

    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum-num;
        if(canSumOptimized(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSumNotOptimized(7, [2,3]));
console.log(canSumNotOptimized(7, [5,3, 4, 7]));
console.log(canSumNotOptimized(7, [2,4]));
console.log(canSumNotOptimized(8, [2,3, 5]));
console.log(canSumOptimized(300, [7,14]));