// const leapYears = function(year) {
//   if(year % 4 === 0){
//     if(year % 100 === 0){
//       if(year % 400 === 0){
//         return true
//       } 
//       return false
//   }
//     return true
//   }
//   return false
// };

const leapYears = function(year){
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}


//> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
// Do not edit below this line
module.exports = leapYears;
