const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']; 

const finalPosition = function(moves) {
  let x = 0;
  let y = 0;

  for(let direction of moves) {
    if(direction === 'south') {
      y += -1;
    }
    if(direction === 'north') {
      y += 1;
    }
    if(direction === 'west') {
      x += -1;
    }  
    if(direction === 'east') {
      x += 1;
    }
  }

  return [x, y];
}

console.log(finalPosition(moves));
