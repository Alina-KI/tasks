const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

type CallbackType<T, R> = (value: T, index: number, array: T[]) => R

function mapArray<T, R>(arr: T[], callback: CallbackType<T, R>) {
    const newArr: R[] = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

const newArray = mapArray(array, (item, index) => (item + index).toString())

console.log(newArray)