const massa = prompt('masukan berat massa')
const tinggi = prompt('masukan tinggi')
const IMT = Math.pow(massa / tinggi, 2)


if (IMT < 18.5) {
  alert(`${IMT} kurus`)
}
 else if (IMT >= 18.5 && IMT <= 24.9) {
  alert(`${IMT} pas`)
}
else if (IMT >= 25 && IMT <= 29.9) {
  alert (`${IMT} pas`)
}
else {
  alert(`${IMT} obesitas`)
}
