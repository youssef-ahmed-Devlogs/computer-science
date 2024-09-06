/**
 * Declare all the variables
 */

let x = [];
let y = [];
let sumX = sumY = sumXY = sumXSqr = sumYSqr = n = r = a = b = 0;
let message = "There's a proplem in the message condition";

/** 
 * Ask the user to enter the length of x and y
*/

n = parseInt(prompt("Please enter the count of numbers?"));

/** 
 * Loop throw the x and i n loops
 * set the x[i] and y[i]
 * sum all the variables
*/

for(let i = 0; i < n; i++) {
    x[i] = parseInt(prompt(`Please enter the x[${i}] number?`));
    y[i] = parseInt(prompt(`Please enter the y[${i}] number?`));

    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumXSqr += x[i] * x[i];
    sumYSqr += y[i] * y[i];
}

/** 
 * Calculate the correlation
*/

a = (n * sumXY) - (sumX * sumY);
b = (n * sumXSqr - (sumX * sumX)) * (n * sumYSqr - (sumY * sumY));
b = Math.sqrt(b);
r = a / b;

/** 
 * Set the message depend on the correlation result
*/

if(r < 0.9 && r > 0) {
    message = `${r} is a low positive correlation`;
} else if(r < 1) {
    message = `${r} is a high positive correlation`;
} else if(r == 1) {
    message = `${r} is a perfect positive correlation`;
} else if(r == 0) {
    message = `${r} no correlation`;
} else if(r == -1) {
    message = `${r} is a perfect negative correlation`;
} else if(r > -0.9 && r < 0) {
    message = `${r} is a low positive correlation`;
} else if(r > -1) {
    message = `${r} is a high positive correlation`;
}

/** 
 * Display the results to the user
*/

document.querySelector('.r').innerHTML = r;
document.querySelector('.description').innerHTML = message;