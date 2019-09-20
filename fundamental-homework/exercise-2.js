// fungsi untuk menambah semua nilai positif dan semua nilai negatif
let sumPosNeg = (n) => {
	let sumPos = 0
	let sumNeg = 0
	for (let i = 0 ; i < n.length ; i++){
		if (n[i]>0){
			sumPos += n[i]
		} else if (n[i]<0){
			sumNeg += n[i]
		}
	}
	return [sumPos, sumNeg]
}

// console.log(sumPosNeg([10,-20,-10,10,30,-20,10,-20,20,-40,20]))

// fungsi untuk mereturn array fibonacci dengan input panjang deretnya
let fibonacci = (n) => {
    let arr = [0, 1];
    for (let i = 2; i < n ; i++){
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr
}

// console.log(fibonacci(10))
// console.log(fibonacci(15))

// cara 1 fungsi untuk menghapus nilai yang duplikat
let removeDuplicate = (n) => {
    let arr = []
    for (let i = 0 ; i < n.length ; i++){
        if (!arr.includes(n[i])){
        arr.push(n[i])
        }
    }
    return arr
}

// console.log(removeDuplicate([10,20,10,10,30,20,10,20,20,40,20]))

// cara 2  fungsi untuk menghapus nilai yang duplikat
let removeDuplicate2 = (n) => {
    let arr = [n[0]]
    for (let i = 0 ; i < n.length ; i++){  // Loop array inputan
        for (let j = 0 ; j < arr.length ; j++){ // Loop pengecekan
            if (n[i] == arr[j]){
                break
            }
            if (j == arr.length-1){
                arr.push(n[i])
            }
        }
    }
    return arr
}

// console.log(removeDuplicate2([10,20,10,10,30,20,10,20,20,40,20]))

// fungsi untuk melipatgandakan jumlah huruf sesuai indexnya
let mumble = (str) => {
    let result = str.toUpperCase().split('')
    let arr = str.split('')
    for (let i = 0 ; i < result.length ; i++)
        for (let j = 0; j<i ; j++){
        result[i] += arr[i]
    }
    return result.join('-')
}

// console.log(mumble('abcde'))
// console.log(mumble('hello'))

let orang = {
    nama: 'saitama',
    pekerjaan: 'superhero',
    contact: {
        nomorTelfon: [0812345678, 087654321],
        address: {
            jalan: 'Jl. Setiabudi',
            kota: 'JKT'
        }
    },
    orangTua: [
        {
            nama: 'Ibunya Saitama',
            pekerjaan: 'Urus Saitama'
        },
        {
            nama: 'Bapaknya Saitama',
            pekerjaan: 'Urus Ibunya Saitama'
        }
    ],
    pukul: () => {
        return 'aduh sakit'
    }
}

// console.log(orang.pukul)
// orang.nama = 'doraemon'
// console.log(orang)

let coba =  () => {
    let e = () => {
        return {
            saitama: 'orang',
            dunia: [
                0,
                1,
                2,
                {
                    testing: (param) => {
                        return {
                            [param]: {
                                world: () => {
                                    return 'iseng'
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
    return e
}

// console.log(coba()())
// console.log(coba()().dunia[3].testing('hello').hello.world())

// membuat nama properti object melalui parameter
let createObject = (a,b,c) => {
    return {
        [a]: 'Value 1',
        [b]: 'Value 2',
        [c]: 'Value 3'
    }
}

console.log(createObject('name', 'age', 'address'))