let prices1: number[] = [7, 1, 5, 3, 6, 4]
let prices2: number[] = [7, 6, 4, 3, 1]

function maxProfit(prices: number[]) {
    const i = prices.slice(0, prices.length - 1).reduceRight((acc, price) => {
        return acc - price
    }, prices[prices.length - 1])
    if (i < 0){
        return 0
    }
    else {
        return prices.reduce((acc) => {
            return acc
        }, 0)
    }
}

console.log(maxProfit(prices1))
// console.log(maxProfit(prices2))