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

   console.log(citiesvisited);


/* 
   5. You have an array named 'teaOrders'with 'chai', 'iced tea', 'matcha', and 'earl grey'.
   Remove the last element of the array usig the pop method and store it in a variable named lastOrder.
 */

   let teaOrders = ["chai","iced tea", "matcha", "earl grey"];
   const lastOrder = teaOrders.pop(teaOrders);
   console.log(`Your last order is: ${lastOrder}`);
   console.log(teaOrders);


/* 
   6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai".
   Create a soft copy of this array named softCopyTeas
*/

 let popularTeas = ["green tea", "oolong tea", "chai"];
 const softCopyTeas = popularTeas;
 console.log(popularTeas)
 console.log(softCopyTeas)


/* 
   7. You have an array named 'topCities' containing 'Berlin', 'Singapore', and 'New York'.
   Create a hard copy of this array named hardCopyCities
 */
 console.log("///////// Top Cities /////////");
   let topCities = ["Berlin", "Singapore", "New York"];
   let hardCopyCities = [...topCities];
   topCities.pop();
   console.log(`Your original copy: ${topCities}`)
    console.log(`Your hard copy: ${hardCopyCities}`)
  

/* 
   8. You have two arrays: 'europeanCities' containing 'Paris' and 'Rome', and 'asianCities' containing "tokyo" and "Bangkok"
   Merge these two arrays into a new array named 'worldCities'.
 */

   console.log("/////// HardCopy ////////")

   let europeanCities = ["Paris", "Rome"];
   let asianCities = ["Tokyo", "Bangkok"];
   let worldCities = [...europeanCities,...asianCities];
   console.log(`Array join using spread: ${ worldCities}`);
     worldCities = europeanCities.concat(asianCities);
   console.log(`Array join using concat(): ${ worldCities}`);
   

/* 
   9. You have an array named 'teaMenu' containing 'masala chai', 'oolong tea', 'green tea', and 'earl grey'. 
   Find the length of the array and store it in a variable named 'menuLength'.
 */

   let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
   let menuLength = teaMenu.length;
   console.log(menuLength);

/* 
    10. You have an array named 'cityBucketList' containing 'Kyoto', "London", "Cape Town", and "Vancouver". 
    Check if 'London'is in the array and store the result in a variable named isLondonInList.
 */

    let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
   let isLondonInList = cityBucketList.includes("London");
   console.log(isLondonInList);

   