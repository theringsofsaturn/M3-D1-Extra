/* 1. Given a string (as a parameter), return the character that is most commonly used. */

const maxChar = (str) => {
  let max = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */

const isAnagram = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

const anagrams2 = (str, arr) => {
  const anagrams = [];
  arr.forEach((word) => {
    if (isAnagram(str, word)) {
      anagrams.push(word);
    }
  });
  return anagrams;
};

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */

const isPolindrome = (str) =>
  str.split(" ").join("") ===
  str.split(" ").join("").split("").reverse().join("");

/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 */

const reverseInt = (n) =>
  parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/

const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let step = " ";

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};
steps(4);

/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" â‡’ "olleh" */

const reverseStr = (str) => str.split("").reverse().join("");

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/

const chunk = (arr, n) => {
  const chunks = [];
  let i = 0;
  let length = arr.length;

  while (i < length) {
    chunks.push(arr.slice(i, (i += n)));
  }
  return chunks;
};
console.log(chunk([1, 2, 3, 4], 2));

/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/

const pyramid = (height) => {
  for (let i = 0; i < height; i++) {
    // 2n+1
    let stars = "*".repeat(2 * i + 1);
    let spacesBefore = " ".repeat(height - i - 1);
    console.log(spacesBefore + stars);
  }
};
pyramid(4);

/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/

const matrix = (n) => {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
};
console.log(matrix(4));
