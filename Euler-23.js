var divisors = function (number) {
    sqrtNumber = Math.sqrt(number);
    var sum = 1;
    var half = number / 2;
    for (var i = 2; i <= half; i++) {
        if (number % i === 0) { sum += i; }
    }
    if (sum > number) { return true; }
    else { return false; }
};
var abundent = [], k = 0;
var upperLimit = 28123;
for (var i = 1; i <= upperLimit; i++) {
    if (divisors(i)) { abundent[k] = i; k++ };
}
var abundentCount = abundent.length;
var canBeWrittenAsAbundant = [];
for (var i = 0; i < abundentCount; i++) {
    for (var j = i; j < abundentCount; j++) {
        if (abundent[i] + abundent[j] <= upperLimit) { canBeWrittenAsAbundant[abundent[i] + abundent[j]] = true; }
        else {
            break;
        }
    }
}
for (i = 1; i <= upperLimit; i++) {
    if (canBeWrittenAsAbundant[i] == true) { continue; }
    else { canBeWrittenAsAbundant[i] = false; }
}

var sum = 0;
for (i = 1; i <= upperLimit; i++) {
    if (!canBeWrittenAsAbundant[i]) {
        sum += i;
    }
}

console.log(sum);
