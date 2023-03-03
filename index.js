// Import stylesheets
import './style.css';

// Four Methods to Search Through Arrays in JavaScript
// Published on September 9, 2020 · Updated on December 15, 2021
// ********************************************

// includes()
// ---------------------------

//The includes() method returns either a true or a false if a value exists in an array or not.

const letters = ['a', 'e', 'm', 'y', 'p', 'e'];

const includes_a = letters.includes('a');
console.log(includes_a); //true

//Does letters include 'k'?
const includes_k = letters.includes('k');
console.log(includes_k); //false

//Does letters include 'a' after index 2?
const a_after2 = letters.includes('a', 2);
console.log(a_after2); //false

//Does letters include 'e' after index 3?
const e_after3 = letters.includes('e', 3);
console.log(e_after3); //true


// indexOf()
// --------------------------------

// The indexOf() method returns the first index of a value in an array. If there is no match, the method returns -1.

//search index of 'm' in letters array
const index_m = letters.indexOf('m');
console.log(index_m);   //2

//search index of 'r' in letters array
const index_r = letters.indexOf('r');
console.log(index_r); //-1

//search index of 'e' after index 3
const e_index3 = letters.indexOf('e', 3);
console.log(e_index3);  //5


// find()
// ------------------------------------

//The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined.

const alpha_numbers = ["shift", 11, 'return', 32, 'ctrl', 65, 'alt', 'end', 6, 'backspace', 57, 'caps lock', 74, 'tab', 'esc', 28, 'ins', 'home', 101, 'delete'];

//search the word with more than 5 characters
const big_keys = alpha_numbers.find(item => item.length > 5);
console.log(big_keys); // return  // why not backspace?

//search the number greater than 70
const small_numbers = alpha_numbers.find(num => num > 70);
console.log(small_numbers); //74  //why not 101?

//search the word with more than 5 characters after index 12
const bigkey_after12 = alpha_numbers.find((el, index) => el.length > 5 && index > 12);
console.log(bigkey_after12);  //delete

// filter()
// ---------------------------

// The filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array.

//return all the numbers smaller than 50
const smaller_50 = alpha_numbers.filter(item => item < 50);
console.log(smaller_50);  //[11, 32, 6, 28]

const long_words = alpha_numbers.filter(elm => elm.length >= 5);
console.log(long_words); 
// ["shift", "return", "backspace", "caps lock", 'delete']





