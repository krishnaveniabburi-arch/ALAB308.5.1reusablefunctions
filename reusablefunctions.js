// Take an array of numbers and return the sum
// Writing functions

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3]));

// Take an array of numbers and return average
function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(getAverage([3, 4, 5, 6, 7]));

// Take an array of strings and return the longest string\
function longestString(strings) {
    let longest = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i]
        }
    }
    return longest;
}
console.log(longestString(["raju", "dani", "Veda"]));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function longerThan(strings, number) {
    let results = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > number) {
            results.push(strings[i]);
        }
    }
    return results;
}
console.log(longerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

//--Part2--

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
 // sorting array by age and using callback functions
 function sortbyAgecallback(a,b) {
   return Number((a.age) - Number(b.age));
   }
     const sortdata = [...data].sort(sortbyAgecallback); // passing call back into .sort()
 console.log(sortdata);

 // Filter the array to remove entries with an age greater than 50
 function filterAge(a) {
    return Number((a.age) <= 50);
 }
const filterdata = data.filter(filterAge);
console.log(filterdata);

// Map the array to change the “occupation” key to “job” and increment every age by 1
function usemapping(a) {
    return { // Renaming key values
        id: a.id,
        name: a.name,
        job: a.occupation,
        age: String(Number(a.age) + 1) // incrementing age and keeps it a string
    };
}
const mappdata = data.map(usemapping);
console.log(mappdata);
// Use the reduce method to calculate the sum of the ages
function calculateSumandAverage(a) {
    if (a.length === 0) 
        return { sum:0, average:0 };
    const sum = a.reduce((acc, person) => acc + Number(person.age), 0); // using accumaltor statrts initial value
    //  and pass second argument to reduce method, becomes accumulator value on the first
    const average = sum / a.length;
    return { sum, average};
}
    const sumavg = calculateSumandAverage(data);
    console.log(sumavg.sum);
    console.log(sumavg.average);