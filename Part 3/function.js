//////////////////////
//function statement//
//////////////////////

//function statement pada runtime akan di naikkan ke atas
//sehingga aman digunakan bahkan sebelum deklarasi
//istilah ini disebut 'hoisting'

//name adlh function parameter
function greet(name = 'Stranger') {
  console.log(`Hello ${name}`)
}

function alertuser() {
  console.log('error detected')
}

//////////////////////
//function expression//
//////////////////////

//function expression harus dideklarasi dlu sblm dipakai

const growl = function () {
  console.log('meong')
}

//ketika user baru masuk
greet('Henny')
greet('Wakato')

//ketika user melakukan kesalahan
alertuser()

//ketika kucing meong
growl()

/////////////////////////
//function return value//
////////////////////////

const eat = function (foodName) {
  console.log(`I am eating ${foodName}`)

  // by default function akan return undefined
  // return undefined
}

const hasilFunction = eat('bibimbap')
console.log(hasilFunction) // undefined

const getSpecialNumber = function () {
  return 888
}

const number = getSpecialNumber()
console.log(number)
console.log(number + 200)
console.log(Math.pow(number, 2))


//setTimeout ada 2 parameter
//parameter 1; function yg mau dijalankan
//parameter 2; waktu delay (dlm ms) - 1000 ms = 1 s

//cara 1
function printTulisan() {
  console.log('kamu sudah menunggu 3 detik')
}
setTimeout(printTulisan, 3000)

//cara 2
setTimeout(function () {
  console.log('test')
}, 2000)

// setInterval ada 2 parameter
// parameter 1; function yg mau dijalankan
// parameter 2; waktu delay (dlm ms) - 1000 ms = 1 s

const interval = setInterval(function () {
  console.log('1 detik telah berlalu')
}, 1000)

//challenge setInterval jalanin cuma 3 kali
function stop() {
  clearInterval(interval)
}
setTimeout(stop, 3100)

