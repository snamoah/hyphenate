# Hyphenate

Simple utility module for hyphenating words, phrases and clauses



## Installation

```
$ npm install hyphennate
```


## Usage

```javascript
import hyphenate from 'hyphennate'

hyphenate('Mr. and Mrs. Foo Bar')
//=> 'mr-and-mrs-foo-bar'

hyphenate("The string, that brings: both 1 + 2 = 3; together & decypher's code is brave! (@menacle).     ")
//=> 'the-string-that-brings-both-1-2-3-together-decyphers-code-is-brave-menacle'
```
