let water1: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]//6
let water2: number[] = [4, 2, 0, 3, 2, 5]//9

function isRightBlock(landHeights: number[], height: number, index: number) {
    for (let i = index + 1; i < landHeights.length; i++) {
        if (landHeights[i] > height && landHeights[index] <= height) {
            return true
        }
    }
    return false
}

function isLeftBlock(landHeights: number[], height: number, index: number) {
    for (let i = index - 1; i >= 0; i--) {
        if (landHeights[i] > height && landHeights[index] <= height) {
            return true
        }
    }
    return false
}

function trap(landHeights: number[]) {
    const max = Math.max(...landHeights)
    let waterCount = 0
    for (let height = 0; height < max; height++) {
        waterCount += landHeights.reduce((acc, item, index) => {
            if (isLeftBlock(landHeights, height, index) && isRightBlock(landHeights, height, index)) {
                return acc+1
            }
            return acc
        }, 0)
    }
    return waterCount
}


console.log(trap(water1))
console.log(trap(water2))