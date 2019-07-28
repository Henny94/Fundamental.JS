// switch case menerima keyword untuk dibandingkan (number/string)

const job = 'Doctor'

switch (job) {
  case 'Progammer':
    console.log('u make great application out of code')
    break;
  case 'Doctor':
    console.log('u heal the sick ones')
    break;
  case 'Chef':
    console.log('u cook delicious food')
    break;
  default:
    console.log('What do u do?')
}

const job = 'Dokter'

switch (job) {
  case 'Progammer':
    console.log('u make great application out of code')
    break;
  case 'Doctor':
  case 'dokter':
    console.log('u heal the sick ones')
    break;
  case 'Chef':
    console.log('u cook delicious food')
    break;
  default:
    console.log('What do u do?')
}