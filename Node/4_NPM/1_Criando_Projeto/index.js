const _ = require('lodash')

const a = [1,2,3,4,5,6,7]
const b = [0, 2, 3, 5, 6, 8,9]

const diff = _.difference(a,b)

console.log(diff)
