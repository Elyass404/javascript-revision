let first = "                             ilyass ";
let last = "marghine";

//to append something to an existing var
first += "hello this is the second part of the name!";

//to know the length of a string
let lengthOfFirstName = first.length;

//to change a string to upperCase
let upperFirstName = first.toUpperCase();

//to change a string to lowerCase
let lowerFirstName = first.toLowerCase();

//to slice some string (to take a portion of a string and store it or log it )
let sliced = first.slice(0, 3); //now the variable sliced will start taking the letters from the index 0 and stop with taking the third letter(not the third index)

// to split a string
let splitted = first.split(" "); // so the "first" variable will split its elements into an array whenever there is a backspace (we can change the separator in the split function (", or . or whatever we want"))

//to join elements of an array into one string
let joined = splitted.join("-"); // so the elements inside the array "splitted" will be joined and between each element, there will be a dash(we can choose whatever separator we want in the function join("- or space or . or even a letter or whatever we want"))

//to trim/remove all the spaces in the bigenning and the ending in a certain string (not in the middle of the sting)
let trimed = first.trim();

/*NOTE: when you write a multi line string and store it in to a variable 
with the single/double quotes, the compiler will give you an error.
so to store a multiline string in a variable, you should use the backticks to give you what 
we call 'template leterals" so you can write multiple lines and store them in a var 
it is very usefull when used in writing an html code with changable variables 
 */

//--------------Exercice-----------------

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Ilyass";
let favActorLastName = "Mar";
let fullName = favActorFirstName + favActorLastName;
let upperCase = fullName.toUpperCase();
let message =
  "My favorite actor is " +
  upperCase +
  " and he is the badest actor i have ever known hahaha, just jocking he is the worst ever. evil laugh";

message += " he was never participated in a movie";

console.log(message);
