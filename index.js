function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('')
}

/* 
  Add your pseudocode here
  Bro I got it right the first time around...
*/

/*
  Add written explanation of your solution here
  Idk man, I did it right at first...
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
