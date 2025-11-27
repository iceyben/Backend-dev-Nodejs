
/* 1. Write a "while" loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named "sum". */
/* 
let i = 1;
let sum = 0;

while(i <= 5){
   sum = sum + i;
   i++;
}
console.log(sum); */


/* 2. Write a "while" loop that counts down from 5 to 1 and stores the numbbers in an array named "countdown".
 */

/* let i= 5;
let countdown = []
while (i >= 1) {
    countdown.push(i)
    i--;
}

console.log(countdown)


 */


/*  3. Write a "do while " loop that prompts a user to enter their favorite tea type untill they enter "stop".
 Store each tea type in an array named "teaCollection" */
/* 
 let teaCollection = []
 let tea;

 do {
    tea = prompt(`Enter your favorite tea,  (type "stop" to finish) `);

    if(tea !== "stop"){
        teaCollection.push(tea);
    }
 } while (tea !== "stop");
 */


/*  4. Write a 'do while' loop that adds numbers from 1 t0 3 and stores the result in a variable named 'total'; */

/*  let total = 0;
 let k = 1;

  do {
    total += k;
    k++;
  } while (k <= 3);

  console.log(total); */
  
/* 5. Write a 'for' loop that multiplies each element in the array '[2, 4, 6]' by 2 and stores the results in a new array named 'multipliedNumbers'. */

/* let multipliedNumbers = []
console.log(`Empty multipliedNumbers: ${multipliedNumbers}`);

let items = [ 2, 4, 6];
let element;
console.log(`The array of number before: ${items}`);

for (let j = 0 ; j < items.length;  j++){
  element = items[j] * 2;
  multipliedNumbers.push(element);

}

console.log(`Final multipliedNumbers result: ${multipliedNumbers}`); */


/* 6. Write a 'for' loop that lists all the cities in the array '["Paris" , "New York", "Tokyo", "London"] and stores each city in a new array named "cityList".  */
/* 
let cityList = [];
let cities = ["Paris", "New York", "Tokyo", "London"];


for(let l = 0; l < cities.length; l++){
  const myCity = cities[l];
  cityList.push(myCity)
}
console.log(`cityList is: ${cityList}`); */

