import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arrayS1 = new Array(...s1);
  let arrayS2 = new Array(...s2);
  let result = 0;

  for (let i = 0; i < arrayS1.length; i++) {
    let index = arrayS2.indexOf(arrayS1[i]);
    if(index !== -1){
      arrayS2.splice(index, 1);
      result++;
    }
  }

  return result; 
}
