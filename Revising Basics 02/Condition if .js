// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

let password = "";
let length = password.length;

if (length === 8) {
  console.log("welcome to the matrix!");
} else if (length === 0) {
  console.log("please provide a password");
} else if (length < 8) {
  console.log("length is too short to enter the matrix!");
} else if (length > 8) {
  console.log("password is too long to enter the matrix!");
}


//you can do it this way below but i prefer my way above

let passwordo;

if (passwordo === 8) {
  console.log("Welcome");
} else if (passwordo <= 8) {
  console.log("Passwordo is too short");
} else if (passwordo >= 8) {
  console.log("Too long passwordo");
  console.log("Passwordo should be 8 characters");
} else {
  console.log("Please provide a passwordo");
}
