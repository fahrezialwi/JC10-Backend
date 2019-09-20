// membuat method map() sendiri tanpa pola Array.prototype
let ownMap = (arr, callback) => {
    let mappedArr = []
    for(let i=0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i], i))
    }
    return mappedArr
}

let arr = [1,2,3,4]

let newArr = ownMap(arr, (val) => {
    return val * 2
})

let indexArr = ownMap(arr, (val, index) => {
    return index
})

// console.log(newArr)

// membuat method map() sendiri dengan pola Array.prototype
Array.prototype.ownMap2 = function(callback) {
    let mappedArr = [];
    for(let i=0; i < this.length; i++) {
        mappedArr.push(callback(this[i], i))
    }
    return mappedArr
}

let arr2 = [1,2,3,4]

let newArr2 = arr2.ownMap2((val) => {
    return val * 2
})

// console.log(newArr2)

// konversi huruf ke angka lalu dijumlah
let calcLetterToNum = (string) => {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    string.toLowerCase()
    var value = 0
    for(var i = 0; i < string.length; i++) {
        value += alphabet.indexOf(string[i]) + 1
    }
    return value
}

console.log(calcLetterToNum('aabbccdd'))

// konversi huruf ke angka lalu dijumlah yang angkanya genap
let calcEvenLetterToNum = (string) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    string.toLowerCase()
    let value = 0
    for(let i = 0; i < string.length; i++) {
        if((alphabet.indexOf(string[i])+1) % 2 == 0)
        value += alphabet.indexOf(string[i]) + 1
    }
    return value
}

console.log(calcEvenLetterToNum('aabbccdd'))

// konversi huruf ke angka lalu dijumlah yang index input stringnya ganjil
let calcOddStringToNum = (string) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    string.toLowerCase()
    let value = 0
    for(let i = 1; i < string.length; i+=2) {
        value += alphabet.indexOf(string[i]) + 1
    }
    return value
}

console.log(calcOddStringToNum('aabbccdd'))

// cara 2 untuk konversi huruf ke angka lalu dijumlah yang index input stringnya ganjil
let calcOddStringToNum2 = (string) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    string.toLowerCase()
    let value = 0
    for(let i = 0; i < string.length; i++) {
        if(i % 2 == 0){
            value += alphabet.indexOf(string[i]) + 1
        }
    }
    return value
}

console.log(calcOddStringToNum2('aabbccdd'))