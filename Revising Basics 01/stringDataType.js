let first = "                             ilyass "
let last = "marghine"

//to append something to an existing var 
first += "hello this is the second part of the name!"

//to know the length of a string
let lengthOfFirstName= first.length

//to change a string to upperCase 
let upperFirstName = first.toUpperCase()

//to change a string to lowerCase 
let lowerFirstName = first.toLowerCase()

//to slice some string (to take a portion of a string and store it or log it )
let sliced = first.slice(0,3) //now the variable sliced will start taking the letters from the index 0 and stop with taking the third letter(not the third index)

// to split a string 
let splitted =  first.split(" ") // so the "first" variable will split its elements into an array whenever there is a backspace (we can change the separator in the split function (", or . or whatever we want"))

//to join elements of an array into one string
let joined = splitted.join("-") // so the elements inside the array "splitted" will be joined and between each element, there will be a dash(we can choose whatever separator we want in the function join("- or space or . or even a letter or whatever we want"))

//to trim/remove all the spaces in the bigenning and the ending in a certain string (not in the middle of the sting)
let trimed = first.trim()

//--------------Exercice-----------------