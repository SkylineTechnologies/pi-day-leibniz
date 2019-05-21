"use strict";

calcPi();

function calcPi() {
  let startTime = new Date();
  determinePi();
  let endTime = new Date();
  console.log((endTime - startTime) / 1000);
}

function determinePi() {
  const realPi = 3.141592653589793;
  const epsilon = 0.00000001;
  let delta = 10;
  let totalIterations = 0;
  let k = 1;

  let pi_value = 0.0;

  while (delta > epsilon) {
    pi_value += Math.pow(-1, k + 1) / (2 * k - 1);
    delta = Math.abs(4 * pi_value - realPi);
    k++;
  }
  totalIterations = k;
  pi_value = 4 * pi_value;
  console.log("Total Iterations: " + totalIterations);
  console.log("Pi: " + pi_value);
}
