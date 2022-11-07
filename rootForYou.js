const metric = 'redness';

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];


const judgeVegetable = function (vegetables, metric) {
  let total = vegetables[0][metric];  //[0] in vegetables[0] is the array index for the object you want to look in, and reference the redness key dynamically like this
  let person = 0;
  vegetables.forEach(function(item, index){
    if (item[metric] >= total) {
      total = item[metric];
      person = index;
    }
  });
  return vegetables[person].submitter;
};

console.log(judgeVegetable(vegetables, metric));
