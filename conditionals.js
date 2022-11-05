/* Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases */

var age = 6;

if (age < 13) {
  console.log('Elementary School');
 }
else if (age >= 13 && age <=18) {
  console.log('Secondary School');
}
else {
  console.log('Lighthouse Labs');
 }