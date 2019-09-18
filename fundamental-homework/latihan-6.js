function countNumber(num) { 
    let input =  num.toString(10).split("").map(Number)
    let array = [0,0,0,0,0,0,0,0,0,0]
    for (let i = 0 ; i<input.length ; i++){
        let a = input[i]
        if (input[i]){
            array[a] += 1
        }
    }
    return {
        0: array[0],
        1: array[1], 
        2: array[2],
        3: array[3], 
        4: array[4],
        5: array[5], 
        6: array[6],
        7: array[7], 
        8: array[8],
        9: array[9], 
    }
}

console.log(countNumber(8923928432))