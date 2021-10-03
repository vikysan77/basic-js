import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) return 'Unable to determine the time of year!';
  if ( Object.prototype.toString.call(date) !== '[object Date]' || String(date) == new Date()) throw new Error('Invalid date!');

  let month = date.getMonth();
      if (month >= 2 && month < 5){
            return "spring";
      } else if (month >= 5 && month < 8){
            return "summer";
      } else if (month >= 8 && month < 11){
            return "autumn";
      } else {
            return "winter";
      }

}
