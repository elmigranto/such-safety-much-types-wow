const main = () => {
  const ignoredInts = [1, 2, 3]

  ;[1, 2, 3].includes(3)

  console.dir('HELLO, TYPED WORLD!') // eslint-disable-line no-console
}

if (require.main === module)
  main()
