const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

type CallbackType<T> = (value: T, index: number, array: T[]) => boolean

function filterArray<T>(arr: T[], callback: CallbackType<T>) {
    const newArr: T[] = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr))
            newArr.push(arr[i])
    }
    return newArr
}

const newArray = filterArray(array, (item) => item % 2 !== 1)

console.log(newArray)