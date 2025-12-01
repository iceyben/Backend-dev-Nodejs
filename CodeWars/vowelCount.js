// To know how many vowels in a word

/* 
   Return the number (count) of vowels in the given string.
   We will consider a, e, i, o, u as vowels for this Kata (but not y).
   The input string will only consist of lower case letters and/or spaces.
 */


let count = 0;
const getCount = (string)=>{
    
    const vowels =  ["a", "e", "i", "o", "u" ];
      console.log(`How many vowels in: ${string}`);

      for (const char of string) {
        if(vowels.includes(char)){
            count++;
        } 
      }
      return count;
   }

   getCount("stkaiecvbn");
   console.log(`I found  ${count} vowels`);
   