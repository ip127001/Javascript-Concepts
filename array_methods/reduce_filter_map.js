var bigData = [];
for (var i = 0; i < 100000; i++) {
  bigData[i] = i;
}

console.time("big");
var data = bigData.filter(x => x % 2 === 0).map(x => x * 2);
console.timeEnd("big");

console.time("big");
var data = bigData.reduce((prev, next) => {
  if (next % 2 === 0) {
    prev.push(next * 2);
  }
  return prev;
}, []);
console.timeEnd("big");
