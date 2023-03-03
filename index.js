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

const index_m = letters.indexOf('m');
console.log(index_m);   //0

const 