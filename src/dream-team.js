import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let array = [];
if (members === null || members === undefined){
  return false;
} 
for (let i = 0; i < members.length; i++) {
  if (typeof(members[i]) === 'string'){
    if (members[i].trim().length > 0){
      let str = members[i].trim();
      array.push(str[0].toUpperCase());
    }
  }
}
if ( ! array.length) return false;

return arr.sort().join('');
}
