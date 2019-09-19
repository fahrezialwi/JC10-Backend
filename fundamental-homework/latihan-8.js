// cara 1
let removeVowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return str.split('').filter((el) => vowels.indexOf(el.toLowerCase()) == -1).join('')
}

// console.log(removeVowel("makan"))

// cara 2 menggunakan regex
let removeVowel2 = (str) => {
    return str.replace(/[aeiou]/gi, '')
}

console.log(removeVowel2("makan"))

// pertumbuhan penduduk
let increasePopulation = (p, d, v, target) => {
    let count = 0
    while (true){
        count++
        p = p + 0.01*d*p + v
        console.log(Math.round(p))
        if (p > target) {
            return count
        }
    }
}

console.log(increasePopulation(1000, 2, 50, 3500))