function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return parseInt(celsius);
};

const fahrenheit = 89;
console.log(fahrenheitToCelsius(fahrenheit));