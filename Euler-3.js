
var factor = 2;

function getPrime(number) {
    while(number != factor) {
        if (number % factor === 0) {
            number = number / factor;
            factor = 2;
        } else {factor += 1}
    }


    function writePrime(factor) {
        return factor;
    }

    console.log(writePrime(factor))

}
 getPrime(600851475143);
