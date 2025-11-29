/* 1. Write a "for" loop that loops through the array
 ["green tea", "black tea", "chai", "oolong tea"]
 and stops the loop when it finds "chai".
 Store all teas before chai in a new array named selectedTeas. */

let teaType = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];

for (let i = 0; i < teaType.length; i++) {
    if(teaType[i] ==="chai"){
        break;
    }
    selectedTeas.push(teaType[i]);
    
}

// console.log(selectedTeas);


/* 2.Write a "for" loop that loops through the array
 ["London", "New York", "Paris", "Berlin"]
 and skips "Paris".
 Store the other cities in an array named visitedCities. */


let cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];

for (let city = 0; city < cities.length; city++) {
    
    if(cities[city] === "Paris"){
        // console.log(`I skip ${cities[city]}`);
        continue;
    }
    visitedCities.push(cities[city]);
}
// console.log(`List of cities: ${visitedCities}`)


/* 3.Use a for-of loop to iterate through the array [1,2,3,4,5]
 and stop when number 4 is found.
 Store all numbers before 4 in smallNumbers. */


let numberList = [1,2,3,4,5];
const smallNumbers = [];

for (const num of numberList) {

    if(num === 4){
        break;
    }

    smallNumbers.push(num);
}

console.log(smallNumbers)