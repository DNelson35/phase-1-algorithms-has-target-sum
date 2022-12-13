function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here   O(n^2)
*/

/* 
  Add your pseudocode here
  
  function hasTargetSum(array,target){
    set up for loop to iterate over numbers
    set up nested forloop that adds the rest of the numbers to the first
    check if the condition is met if not continue if so return true and break.
  }
*/

/*
  Add written explanation of your solution here
  my function will take the array and iterate through it then for each number of i and for each number of i another for loop will iterate through the rest of the numbers. for every number it will check if the number of i added to the number of j is ture. if it is true it will return true if not it will iterate the rest of the way throught the array. if no numbers add up to the target it will return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expectin: ture')
  console.log('=>', hasTargetSum([1,20,100,6,8,3], 9))

  console.log('')

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
