// Authentication Check
let registeredEmail = "ckemwisdom@gmail.com";
let registeredPassword = "12345";

let enteredEmail = "ckemwisdom@gmail.com";
let enteredPassword = "12345";

if (enteredEmail === registeredEmail && enteredPassword === registeredPassword) {
    console.log("Access Granted: Welcome to the Student Portal");
} else {
    console.log("Access Denied: Invalid email or password");
}