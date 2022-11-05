/* prints numbers from 100-200 with 3 exceptions:
number is multiple of 3 print string "Loopy" instead of number
number is multiple of 4 print string "Lighthouse" instead of number
number is multiple of both 3 and 4, print string "LoopyLighthouse" instead
console.log to print */

let n = 100;

while (n <= 200) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if(n % 4 === 0) {
    console.log('Lighthouse');
  } else if(n % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(n);
  }
  n = n + 1;
}


