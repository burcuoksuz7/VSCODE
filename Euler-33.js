var gcd = function(a, b) {
    var temp;
    while (b !== 0) {
        temp = b;
        b = a % temp;
        a = temp;
    }
    return a;
};

var cancelFractionDigits = function(fraction) {
    var nDigits = String(fraction.n).split("");
    var dDigits = String(fraction.d).split("");

    var nI = 0;
    var cancelled = false;
    while (nI < nDigits.length) {
        var dI = dDigits.indexOf(nDigits[nI]);
        if (dI >= 0) {
            nDigits.splice(nI, 1);
            dDigits.splice(dI, 1);
            cancelled = true;
        } else {
            nI++;
        }
    }

    if (nDigits.length > 0 && dDigits.length > 0) {
        var dNum = Number(dDigits.join(""));
        if (dNum) {
            return {n: Number(nDigits.join("")),
                    d: dNum,
                    cancelled: cancelled};
        }
    }

    return null;
};

var simplify = function(fraction) {
    if (fraction.d == 0) return null;
    var gcdValue = gcd(fraction.n, fraction.d);
    return {n: fraction.n / gcdValue,
            d: fraction.d / gcdValue,
            simplified: true};
};

var arrayProduct = function(prev, current) {
    return {n: prev.n * current.n,
            d: prev.d * current.d};
};

var p33 = function() {
    var foundFractions = [];
    for (var n = 10; n <= 99; n++) {
        for (var d = n+1; d <= 99; d++) {
            if (d % 10 == 0) continue;
            var ratio = n / d;
            var fraction = {n: n, d: d};
            cancelled = cancelFractionDigits(fraction);
            if (cancelled != null && cancelled.cancelled) {
                if (ratio == (cancelled.n / cancelled.d)) {
                    foundFractions.push(fraction);
                }
            }
        }
    }
    return simplify(foundFractions.reduce(arrayProduct)).d;
};

console.log(p33());
