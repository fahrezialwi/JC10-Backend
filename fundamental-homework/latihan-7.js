// kaprekar's constant
kaprekarsConstant = (num) => {
    let count = 0
    while (true) {
        count++
        let minNumArr = num.toString().split('').sort()
        // reverse array without mutating original array
        let maxNumArr = [...minNumArr].reverse()
        let littleNum = parseInt(minNumArr.join(''))
        let bigNum = parseInt(maxNumArr.join(''))
        if (bigNum < 1000) {
            bigNum = bigNum * 10
        }
        console.log(`${bigNum} - ${littleNum}`)
        if (bigNum - littleNum === 6174 ){
            return count
        } else {
            num = bigNum - littleNum
        } 
    }
}
   
// console.log(kaprekarsConstant(7615))

// kaprekar's constant cara 2
kaprekarsConstant2 = (num) => {
    let count = 0
    while (num != 6174) {
        sortedAsc = num.toString().split('').sort((a, b) => a-b).join('')
        sortedDesc = num.toString().split('').sort((a, b) => b-a).join('')
        console.log(`${sortedDesc} - ${sortedAsc}`)
        num = sortedDesc-sortedAsc
        while(num.length < 4){
            num = parseInt(num.toString() + "0")
        }
        count++
    }
    return count
}

console.log(kaprekarsConstant2(7615))