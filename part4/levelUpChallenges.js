/* 1. write a "for " loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". 
Store all teas befoe "chai" in a new array named "selectedTeas" */

// let selectedTeas = [];
// let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];

// for(let i = 0; i <= teaCollection.length; i++){
//     if(teaCollection[i] === "chai"){
//         console.log(`I found ${teaCollection[i]} in the loop`);
//         break;
//     }
//      selectedTeas.push(teaCollection[i])
   
// }

// console.log(selectedTeas);



/* 2. Write a "for" loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". 
Store the other cities in a new array named "visitedCities".
 */
/* 
let visitedCities = []
let cities = ["London", "New York", "Paris", "Berlin"];

for (let i = 0; i < cities.length; i++) {
    if(cities[i] === "Paris" || cities[i] === "paris" ){
        console.log(`I found ${cities[i]}, I skiped it`);
        continue;
    }
    visitedCities.push(cities[i]);
}

console.log(visitedCities); */

/* 


3. Use a 'for-of' loop to iterate through the array [1,2,3,4,5], and stop when the number '4' is found. 
Store the numbers before 4 in an array named 'smallNumbers'. */

// let numbers = [1,2,3,4,5];
// let smallNumbers = []

// for (const number of numbers) {
//     if(number === 4){
//         console.log(`I found number ${number} in the list of numbers`);
//         break;
//     }
//     smallNumbers.push(number);
// }

// console.log(smallNumbers)



/* 4. Use a 'for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
Store the other teas in an array named "preferredTeas" */

/* let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const skiptea of teas) {
    if(skiptea === "herbal tea" || skiptea === "Herbal Tea"){
        console.log(`I found ${skiptea} and skiped it.`);
        continue;
    }
    preferredTeas.push(skiptea)
}

console.log(teas)
console.log(preferredTeas); */


/* 5. Use a 'for-in' loop to loop through an object containing city populations. 
Stop the loop when the population of "Berlin" is found and store all previous cities populations in a new object named cityPopulations

 */


let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000,
};
let cityNewPopulations = {};
for (const city in citiesPopulation) {
    if (city == "Berlin" || city =="berlin"){
        break;
    } 
}
  cityNewPopulations[city] = citiesPopulation[city];
console.log(cityNewPopulations)



