function promiseAll<T>(promises: Promise<T>[]) {
    const results: T[] = []
    let count = 0
    return new Promise<T>((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    count++
                    results[i] = res
                    if (i === promises.length)
                        resolve(results)
                }).catch(err => reject(err))
            }
        }
    )
}

const sleep = (ms: number) => {
    return new Promise(res => setTimeout(res, ms))
}

const fetch1 = () => sleep(800).then(() => 11)
const fetch2 = () => sleep(500).then(() => 22)

const results = promiseAll<number>([fetch1(), fetch2()])
results.then(res => {
    console.log(res)
})