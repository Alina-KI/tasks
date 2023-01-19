let prices1: number[] = [7, 1, 5, 3, 6, 4]//5
let prices2: number[] = [7, 6, 4, 3, 1]//0

function maxProfit(prices: number[]) {
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const value = prices[j] - prices[i]
            if (profit < value) {
                profit = value
            }
        }
    }
    return profit
}

console.log(maxProfit(prices1))
console.log(maxProfit(prices2))