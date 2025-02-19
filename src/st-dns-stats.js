import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let reverseDomains = [];
  domains.forEach(domain => {
      reverseDomains.push(domain.split('.').reverse());
  });
  let result = {};
  reverseDomains.forEach(domain => {
    let propName = '';
    for (let i = 0; i < domain.length; i++) { 
       propName += `.${domain[i]}`;
       if (result.hasOwnProperty(propName)){
         result[propName] = ++result[propName];
       } else {
        result[propName] = 1;
       }
    }
  });
  
  return result;
}
