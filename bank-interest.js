function bankInterest(money) {
    const interest = money * 10 * 2 / 100;  // principal * rate * year / 100;
    return interest;
};

const myInterest = bankInterest(10000);
console.log(myInterest);