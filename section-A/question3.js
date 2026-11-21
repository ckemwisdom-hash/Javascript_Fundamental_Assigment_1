// Logical Operator
let username = "lecturer_dict";
let pin = "2026";

// Using && where the final output is false because of a type mismatch
console.log(username === "lecturer_dict" && pin === 2026);

// Using || where the first condition is false and the second is true
console.log(username === "admin" || pin === "2026");

// Using ! to check if username is not equal to admin
console.log(!(username === "admin"));