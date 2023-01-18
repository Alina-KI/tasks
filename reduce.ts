const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

type CallbackType<T, A> = (acc: A, value: T, index: number, array: T[]) => A

function reduceArray<T, A>(arr: T[], callback: CallbackType<T, A>, accumulator: A) {
    let acc: A = accumulator
    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }
    return acc
}

const newArray = reduceArray(array, (acc, item) => acc + item, 0)

console.log(newArray)