const bracket1 = '()'//true
const bracket2 = '()[]{}'//true
const bracket3 = '(]'//false
const bracket4 = '{[]}'//true
const bracket5 = '([)]'//false
const bracket6 = '{[[]{}]}()()'//true

const validBracket = {
    ')': '(',
    ']': '[',
    '}': '{'
}

function isValidBracket(bracket: string) {
    const bracketArray = bracket.split('')
    const validArray = []
    for (const item of bracketArray) {
        if (validBracket[item]) {
            if (validArray.pop() !== validBracket[item])
                return false
        } else
            validArray.push(item)
    }
    return validArray.length <= 0

}

console.log(isValidBracket(bracket1))
console.log(isValidBracket(bracket2))
console.log(isValidBracket(bracket3))
console.log(isValidBracket(bracket4))
console.log(isValidBracket(bracket5))
console.log(isValidBracket(bracket6))