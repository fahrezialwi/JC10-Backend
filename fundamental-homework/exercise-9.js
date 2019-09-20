let calcNumToLetter = (num) => {
    let alphabet = " abcdefghijklmnopqrstuvwxyz"   
    return num.map((val) => {
        return alphabet[val]
    })
}

// console.log(calcNumToLetter([1,2,3]))

let shiftString = (str, num) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let string = str.toLowerCase()
    let arrHasil = []
    num = num % 26

    for(let i = 0; i < string.length; i++) {
        if (alphabet.indexOf(string[i]) == 25 ){
            arrHasil.push(0)
        } else {
            arrHasil.push(alphabet.indexOf(string[i]) + num)
        }
    }
    return arrHasil.map((val) => alphabet[val]).join('')
}

console.log(shiftString('abc', 52))