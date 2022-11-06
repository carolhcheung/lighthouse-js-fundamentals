

function range(start, end, step) { //function range of array and elements declared
  var n = [];  //blank array for us to return either empty string if conditons are not met or add to this empty string if conditions met
  if (start > end || step <= 0) {  //set condition for incorrect parameters
    return n;  //which is still blank for now
  } else if (start === undefined || end === undefined || step === undefined) {
    return n;   //which is still blank for now
  } else { 
    for (let m = start; m <= end; m += step) {  //m is var for new array, and add elements with .push() method, pushes -5 first, then continues with step and next number -2 pushed, step, push again until m <= end
    n.push(m);
  }
  }
  return n; //finally return new array from function range
}

console.log(range(-5, 2, 3));  //prints the returned array from function range






