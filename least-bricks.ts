const wall: number[][] = [
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1]
]

function leastBricks(wall: number[][]) {
    const count = wall.reduce((acc, item) => {
        console.log(item)
        return acc
    }, 0)
    return 1
}
    
console.log(leastBricks(wall))