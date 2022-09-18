let input1 = [[10, 12], [1, 3], [2, 6], [8, 10], [15, 18]]
let input3 = [[1, 3], [2, 6], [6, 10], [15, 18]]
let input2 = [[1, 4], [4, 5]]

function merge(intervals, i = 0) {
    if (i === 0) {
        intervals.sort((a, b) => a[0] - b[0])
    }
    if (intervals.length >= 2 && i <= intervals.length - 2) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            return merge([
                    ...intervals.slice(0, i),
                    [intervals[i][0], intervals[i + 1][1]],
                    ...intervals.slice(2 + i)
                ]
            )
        }
    }
    if (i < intervals.length - 1) {
        return merge(intervals, i + 1)
    }
    return intervals
}

console.log(merge(input1))
console.log(merge(input2))
console.log(merge(input3))


// let merge = function (intervals) {
//     if (intervals.length == 0) return []
//     if (intervals.length == 1) return intervals
//
//     intervals.sort((a, b) => {
//         return a[0] - b[0]
//     });
//
//     let result = [intervals[0]]
//
//     for (let interval of intervals) {
//         let recentInterval = result[result.length - 1]
//         if (recentInterval[1] >= interval[0]) {
//             recentInterval[1] = Math.max(recentInterval[1], interval[1])
//         } else {
//             result.push(interval)
//         }
//     }
//     return result
// }
