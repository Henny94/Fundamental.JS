// we use i for 'literation'
for (let i = 0; i < 10; i++) {
  console.log(`${i + 1}. hello world`)
}

//challenge
//print angka
//2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// dg for loop

for (let i = 2; i <= 20; i += 2) {
  console.log(`${i}`)
}

//nested if
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log('this is nested if')
  }
}

// loop drawing
// let stars = ''
// for(let i = 0; i < 10; i++){
//   stars +='*'
// }
// console.log(stars)

console.log('\n\n\n\n\n\n')

let box = ''
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    box += '*'
  }
  box += '\n'
}
console.log(box)

let segitiga = ''
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    segitiga += '^'
  }
  segitiga += '\n'
}
console.log(segitiga)