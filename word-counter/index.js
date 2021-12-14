const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input Text: `, name => {
  // count words
  const words = name.split(' ')
  const wordCount = words.length
  console.log('\x1b[36m%s\x1b[0m',`Word Count: `,'\x1b[0m',wordCount)
  process.exit()
});