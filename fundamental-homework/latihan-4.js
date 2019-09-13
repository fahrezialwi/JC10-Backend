let dnaStrand = (str) => {
    var pairs = ''
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A":
                pairs += "T"
                break
            case "T":
                pairs += "A"
                break
            case "C":
                pairs += "G"
                break
            case "G":
                pairs += "C"
                break
        }
    }
    return pairs
}

// console.log(dnaStrand("GTCA"))

let dnaStrand2 = (str) => {
    let pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }

    let arr = str.split("")
    return arr.map(x => pairs[x]).join('')
}

// console.log(dnaStrand2("GTCA"))

let babyShark = () => {
    let arr = ["Baby shark", "Mommy shark", "Grandma shark", "Grandpa shark", "Let's go hunt", "HEHEHE", "HUHUHU"] 
    let result = ''
    for (let i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < 3 ; j++){
            result += arr[i] + " doo doo doo doo doo doo" + "\n"
        }
        result += arr[i] + "\n"
    }
    return result
}

console.log(babyShark())