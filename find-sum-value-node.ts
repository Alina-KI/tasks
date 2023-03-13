type Tree = {
    valueNode: number
    next: Tree[]
}

const tree1: Tree = {
    valueNode: 1,
    next: [
        {
            valueNode: 3,
            next: [
                {
                    valueNode: 3,
                    next: null
                },
                {
                    valueNode: 3,
                    next: null
                }
            ]
        },
        {
            valueNode: 2,
            next: null
        }
    ]
}

const tree2: Tree = {
    valueNode: 3,
    next: [
        {
            valueNode: 1,
            next: null
        },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }
    ]
}

const getSum = (tree: Tree) => {
    let sum: number = tree.valueNode
    let partTree: Tree[] = tree.next
    for (let i = 0; i < partTree.length; i++) {
        sum += partTree[i].valueNode
        if (partTree[i].next)
            partTree.push(...partTree[i].next)
    }
    return sum
}

console.log(getSum(tree1))
console.log(getSum(tree2))