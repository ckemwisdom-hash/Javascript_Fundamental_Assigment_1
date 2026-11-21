// Loose vs Strict Equality
let codeA = "100";
let codeB = 100;

console.log(codeA == codeB); // True, Always print true when both values are equal and have the same value or Loose equality converts the string to a number before comparing.
console.log(codeA === codeB); // false  it always check if the data type are the same
console.log(codeA != codeB); // false 	Loose inequality considers the values equal after type conversion.
console.log(codeA !== codeB); // true Strict inequality detects that the data types are different.