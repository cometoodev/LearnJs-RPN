/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  for(let i = 0; i < kata.length; i++) {
    for(let j = kata.length-1; j >= 0; j--) {
      if(kata[i] == kata[j]) {
        return true; 
      } else {
        return false;
      }
    }
  }
}

// TEST CASES
console.log(palindrome("radar")); // true
console.log(palindrome("gorila")); // false
console.log(palindrome("mom")); // true
console.log(palindrome("rotator")); // true
console.log(palindrome("mister")); // false
