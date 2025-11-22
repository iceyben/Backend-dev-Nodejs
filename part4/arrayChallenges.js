/* 
1. Declare an array named 'teaFlavors' that contains the strings 'green tea', 'black tea', and 'oolong tea'. 
Access the first element of the array and store it in a variable named 'firstTea'
 */

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
console.log(`The first tea is: ${firstTea}`);

/* 
    2. Declare an array named 'cities' containing 'London','Tokyo', 'Paris', and 'New York'. 
    Access the third element in the array and store it in a variable named  favoriteCity.
 */

    let cities = ["London", "Tokyo", "Paris", "New York"];
    const favoriteCity = cities[2];
    console.log(`Your favorite city is: ${favoriteCity}`);


/* 
   3. You have an array named 'teaTypes' containing 'herbal tea', 'white tea', and 'masala chai'.
   Change the second element of the array to 'jasmine tea'
 */

   let teaTypes = ["herbal tea", "white tea", "masala chai"];
    teaTypes[1] = "jasmine tea";
    teaTypes[0] = "naton tea";

   console.log(teaTypes);


/* 
    4. Declare an array named 'citiesvisited' containing 'Mumbai', and  'Sydney'.
    Add 'Berlin' to the array using the push method.
 */

    let citiesvisited = ["Mumbai", "Sydney"];
    citiesvisited.push("Berlin");

   console.log(citiesvisited)