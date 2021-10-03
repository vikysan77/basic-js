import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let digitArray = [];
  for (let i = 0; i < String(n).length; i++) {
    let array = String(n).split('');
    array.splice(i, 1).join('');
   digitArray.push(+array.join(''))
  }

  return Math.max(...digitArray);

}
