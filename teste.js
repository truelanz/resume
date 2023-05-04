


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimes(n) {
    const primes = [];
    let i = 2;
    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    return primes;
}

const n = parseInt(gets());
const primes = getPrimes(n);
console.log(primes);

  // TODO: transforme o array em uma string com os números separados por vírgula e coloque entre colchetes
