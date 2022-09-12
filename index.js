for (let n = 1; n <= 100; n++) {
  let str = ''

  if (n % 3 === 0) {
    str += 'Crackle'
  }

  if (n % 5 === 0) {
    str += 'Pop'
  }

  console.log(str || n)
}