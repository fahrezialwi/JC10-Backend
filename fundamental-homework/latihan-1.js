let balikKata = (text) => {  
    if (text.toLowerCase() == 'sop'){
        return 'tumpah'
    } else {
        return text.toLowerCase().split('').reverse().join('')
    }
}

let tambahKurang = (arr) => {
    let operator = 'tambah'
    let sum = arr[0]
    for (var i = 1; i < arr.length; i++){
        if (operator == 'tambah'){
            sum += arr[i]
            operator = 'kurang'
        } else if (operator == 'kurang'){
            sum -= arr[i]
            operator = 'tambah'
        }
    }
    return sum
} 

console.log(balikKata("hello"))
console.log(tambahKurang([1,2,3,4,5]))