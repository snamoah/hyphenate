module.exports = str => {
  const removeRegex = /['"\!\(\)\{\}.]+/g
  const replaceRegex = /[.\s,_:;!@&\(\)\+=\|/]+/g

  return str
    .trim()
    .toLowerCase()
    .replace(removeRegex, '')
    .replace(replaceRegex, '-')
}
