var votes = [
  "angular",
  "angular",
  "react",
  "vue",
  "ember",
  "vanilla",
  "angular"
];

var result = votes.reduce((prev, next) => {
  if (!prev[next]) {
    prev[next] = 1;
  } else {
    prev[next] += 1;
  }
  return prev;
}, {});

console.log(result);