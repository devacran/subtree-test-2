import { map, multiply } from 'ramda'

export const doubleArrayValues = (arr) => map(multiply(2), arr)
console.log('hola')
