var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var total = bills.map(function(num) { //map to create new array
  num *= 1.15;  //calculate tax
  num = num.toFixed(3);  //round to 2 decimals
  num = Number(num);  //cast or converts to string again
  return num;    //returns the num after these commands
});
console.log(total);   //print new array based on total function
