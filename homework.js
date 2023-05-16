/**Loop through an array of 5 random numbers (Include negative numbers). 
 * Sort the numbers from least to greatest and print a new array. 
 * CANT USE THE SORT() or FUNCTIONS. Only use what I've taught you!

// Input: [4,-3,5,7,10]
// Expected Output: [-3,4,5,7,10]
 * Colin helped me in the following assignment. 
 */
let arr1 = [4, -3, 5, 7, 10];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let int = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = int;
    }
  }
}

console.log(arr1);
