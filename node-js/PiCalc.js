"use strict"

const math = require ('mathjs');
const moment = require ('moment');
calcPi();

function calcPi() {
    let iterations = 0;
    let startTime = new moment();
    determinePi();
    let endTime = new moment();
    let miliSecs =0;
    miliSecs = endTime.valueOf()-startTime.valueOf();
    console.log(endTime.diff(startTime, 'miliseconds')/1000);
}

function determinePi() {
    const realPi = 3.141592653589793;
    const epsilon = 0.00000001;
    let delta = 10;
    let totalIterations =0;
    let k=1;

    let pi_value =0.0;

    while (delta > epsilon) {
        pi_value += math.pow(-1, (k + 1)) / (2 * k - 1);
        delta = math.abs((4 * pi_value) - realPi);
        k++;
    }
    totalIterations = k;
    pi_value = 4 * pi_value;
    console.log("Total Iterations: " +  totalIterations);
    console.log("Pi: " + pi_value);
}