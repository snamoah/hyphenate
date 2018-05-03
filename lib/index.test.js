const test = require('tape')
const hyphenate = require('../dist')

test('hyphenate returns same string', t => {
  const str = 'something'

  const newStr = hyphenate(str)
  t.equal(newStr, str)
  t.end()
})

test('hyphenate returns lowercased string with hyphens', t => {
  const str = 'Mr. and Mrs. Foo Bar'

  const newStr = hyphenate(str)

  t.equal(newStr, 'mr-and-mrs-foo-bar')
  t.end()
})

test('hyphenate returns lowercased string without trailing hyphens', t => {
  const str =
    "The string, that brings: both 1 + 2 = 3; together & decypher's code is brave! (@menacle).     "

  const newStr = hyphenate(str)

  t.equal(
    newStr,
    'the-string-that-brings-both-1-2-3-together-decyphers-code-is-brave-menacle'
  )
  t.end()
})
