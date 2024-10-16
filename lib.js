function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0); // prev의 초기값은 0
    return s / numbers.length;
}

function prime(num) {
    if (num < 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    // 짝수이거나, num의 제곱근까지 확인하여 나누어 떨어지면 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return false;
}

function factorial(num) {
    if (num < 1) {
        return "Factorial is not defined for negative numbers";
    }
    let r = 1;
    for (let i = 1; i < num + 1; i++) {
        r *= i;
    }
    return r;
}

module.exports = {
    avg,
    prime,
    factorial
}

