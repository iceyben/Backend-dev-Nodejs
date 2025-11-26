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
/* 
let cityPopulations = {}

let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000,
};

for (const city in citiesPopulation) {
    
    if(city === "Berlin" || city === "berlin"){
        break;
        
    }
    //Creating a new key - value of an object. cityPopulations is the new object created, and the 'city' is the new key created

    cityPopulations[city] = citiesPopulation[city];
 
} */ 
/* console.log(cityPopulations); */



/* 

6. Use a for-in loop to loop through an object containing city Populations.  Skip any city with a population below 3 million and store the rest in a new object named largeCities. */
/* 

let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000
};

let largeCities = {};

for (const city in worldCities) {
    
    if(worldCities[city] < 300000){
        continue;
    }
    largeCities[city] = worldCities[city];
}

console.log(largeCities) */


/* 
7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"] .
Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas */


/* let teaType = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaType.forEach(tea => {
    if(tea === "chai"){
        console.log( `I found ${tea}`);
        return;
    }
    availableTeas.push(tea)
});

console.log(availableTeas); */



/* 8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"] . 
Skip "Sydney" and store the other cities in a new array named traveledcities . */ 

/* 
let cities = ["Berlin", "Tokyo", "Sydney", "Paris"] ;
let traveledcities = [];

cities.forEach((city) => {
    if(city === "Sydney" ){

        // skip on sydney, when found
        return;
    }
    traveledcities.push(city);
});
console.log(traveledcities); */


/* 9. Write a for loop that iterates through the array [2,5,7,9] 
skip the value 7 and multiply the rest by 2. Store the results in a new array named doubleNumbers */

/* 

let numbers = [2,5,7,9];
let doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 7){
        continue;
    }
    const number = numbers[i] * 2;
    doubleNumbers.push(number);
    
}

console.log(numbers);
console.log(doubleNumbers); */



/* 10. Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] .
and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named shortTeas . */


/* let teas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] ;

let shortTeas = [];

for (const tea of teas) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}

console.log(shortTeas);
 */