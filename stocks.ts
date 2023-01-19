let prices1: number[] = [7, 1, 5, 3, 6, 4]//7
let prices2: number[] = [7, 6, 4, 3, 1]//0

function maxProfit(prices: number[]) {
    let currentPrice = prices[0]
    const profit = []
    const array = prices.slice(1, prices.length - 1).map(item => {
        const newItem = item > currentPrice
        if (newItem)
            profit.push(item - currentPrice)
        currentPrice = item
        return newItem
    })
    if (array.every(item => !item)) {
        return 0
    } else {
        return profit.reduce((acc, item) => {
            return acc + item
        }, 0)
    }
}

console.log(maxProfit(prices1))
console.log(maxProfit(prices2))