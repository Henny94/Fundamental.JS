//512 hari, nyatakan dlm tahun bulan minggu dan hari

const a = 512
const b = 365
const c = 30
const d = a / b
console.log(d)
const e = a / c
console.log(e)
console.log(`${d} years ${e} months`)


//solve :

let days = 512
const years = Math.floor(days / 365)
days %= 365
const months = Math.floor(days / 30)
days %=30
const weeks = Math.floor(days / 7)
days %=7

console.log(`${years} years ${months} months ${weeks} weeks ${days} days`)


