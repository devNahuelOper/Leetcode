/* 
You are given an array prices for which the ith element is the price of a given stock on day i.
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/


// function maxProfit(prices) {
//   let profit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     let diff = prices[i + 1] - prices[i];
//     if (diff > 0) profit += diff;
//   }
//   return profit;
// }

function maxProfit(prices) {
  return prices.reduce((profit, price, i) => {
    let diff = prices[i + 1] - prices[i];
    if (diff > 0) profit += diff;
    return profit;
  }, 0);
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));