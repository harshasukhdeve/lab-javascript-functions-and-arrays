// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2)
{
    if (num1 > num2)
        return num1;
    else
        return num2;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(array)
{
  if(array.length == 0)
  {
    return null;
  }
  else if(array.length ==1)
  {
    return array[0];
  }  
var longWord = array[0];
for (i = 0; i < array.length; i++){
  if (longWord.length > array[i].length)
  {
      longWord = longWord;
  } 
  else 
  {
    longWord = array[i];
  }
}
return longWord;
}
  
findScaryWord(words);


// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// function findLongestWord(array){
//   var longWord = array[0];
//   for (i = 0; i < array.length; i++){
//     if (longWord.length > array[i].length){
//         longWord = longWord;
//     } else {
//       longWord = array[i];
//     }
//   }
//   return longWord;
// }

// findLongestWord(words);
// Progression #3: Net Price

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
  var sum=0;
  for(var i=0; i<numbers.length; i++)
  {
    sum += numbers[i]; 
  } 
  return sum;
}
netPrice(numbers);

// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  var sum1=0;
  if(numbersAvg.length == 0)
    return null;
  for(var i=0; i<numbersAvg.length-1; i++)
  {
    sum1 += numbersAvg[i]; 
  } 
  return sum1/(numbersAvg.length);
}



// Progression 4.2: Array of strings
//const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
  var count =0;
  if(wordsArr.length == 0)
    return null;
  for (let i = 0; i < wordsArr.length-1; i++) 
  {
    count += wordsArr[i].length;
  }
  return count/(wordsArr.length);
}



  
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

var newArray = [];
function uniqueArray(wordsUnique){
  if (wordsUnique.length == 0){
    return null;
  }
  var a = 0;
  for (i=0; i < wordsUnique.length ; i++){
    if (newArray.indexOf(wordsUnique[i]) == -1){
      newArray.push(wordsUnique[i]);  
      a++;
    }
    if (a == wordsUnique.length){
      return wordsUnique;
    }
  }
  return newArray;
}



// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(array, word){
  if (array.length == 0){
    return null;
  }
for (i=0; i < array.length; i++){
  if (word == array[i]){
    var a = 1;
  }
}
if (a == 1)
return true
else 
return false;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, word)
{
  var count= 0;
  if (wordsCount.length == 0){
    return 0;
  }
 
  for (i=0; i < wordsCount.length; i++){
    if (wordsCount[i] == word){
      count ++;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
