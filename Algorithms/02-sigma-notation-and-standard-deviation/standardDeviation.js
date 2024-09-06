var sd = (avg = n = a = b = 0);
var x = [];

n = Number(prompt("Enter the number of elements in the array: "));

for (var i = 0; i < n; i++) {
  x[i] = Number(prompt("Enter the element: "));
  avg += x[i];
}

avg = avg / n;

for (var i = 0; i < n; i++) {
  a += Math.pow(x[i] - avg, 2);
}

b = a / n;

sd = Math.sqrt(b);

console.log(sd);