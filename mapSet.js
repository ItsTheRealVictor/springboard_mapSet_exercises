/*
Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4])
*/
new Set([1,1,2,2,3,4]) // {1,2,3,4}

/*
Quick Question #2
What does the following code return?

[...new Set("referee")].join("")
*/

const example2 = [...new Set("referee")].join("") // ref

/*
Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
*/
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*{
    [1,2,3]: true,
    [1,2,3]: false
}
*/

/*
hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/
function hasDuplicate(arr){
    const arrSet = new Set(arr)
    return arrSet.size === arr.length
}
// const example3 = [1,3,2,1]
// console.log(hasDuplicate(example3))
// const example4 = hasDuplicate([1,1,2,3])
// console.log(example4)

/*
vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/


function vowelCount(str){
    const vowels = 'aeiou'
    const strVowels = [...str].filter((elm) => vowels.indexOf(elm) !== -1)
    const result = [...strVowels].reduce((char, count) => { char[count] = char[count] ? char[count] + 1: 1; return char }, {})
    return new Map(Object.entries(result))
}
console.log(vowelCount('aaabcdeefghi'))
console.log(vowelCount('awesome'))
console.log(vowelCount('colt'))