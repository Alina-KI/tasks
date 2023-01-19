const container1: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7]//49
const container2: number[] = [1, 1]//1
const container3: number[] = [4, 3, 2, 1, 4]//16
const container4: number[] = [1, 2, 1]//2

function volumeContainer(container: number[]) {
    let volume = 0
    for (let i = 1; i < container.length; i++) {
        for (let j = 0; j < container.length - i; j++) {
            if (i !== j) {
                const min = Math.min(container[j], container[j + i])
                if (volume < min * i) {
                    volume = min * i
                }
                console.log(volume)
            }
        }
    }
    return volume
}

console.log(volumeContainer(container1))
console.log(volumeContainer(container2))
console.log(volumeContainer(container3))
console.log(volumeContainer(container4))