let pecahan = (num) => {
    
    let nominal = num
    let pecahan100 = Math.floor(nominal / 100000)
    nominal = nominal % 100000
    let pecahan50 = Math.floor(nominal / 50000)
    nominal = nominal % 50000
    let pecahan20 = Math.floor(nominal / 20000)
    nominal = nominal % 20000
    let pecahan10 = Math.floor(nominal / 10000)
    nominal = nominal % 10000
    let pecahan5 = Math.floor(nominal / 5000)

    return {
        rp100k: pecahan100,
        rp50k: pecahan50,
        rp20k: pecahan20,
        rp10k: pecahan10,
        rp5k: pecahan5
    }
}

console.log(pecahan(285000))