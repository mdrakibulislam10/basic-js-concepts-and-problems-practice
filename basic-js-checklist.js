// 1. 3 type of variable declare
var address = "Bangladesh";
let age = 45;
const myName = "Rakib";

// 2. 1-100 num print
for (let i = 1; i <= 100; i++) {
    // console.log(i);
};

// 3. 50-80 all odd number print
for (let i = 50; i <= 80; i++) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
};

// 4. 3 num addition function
function add(num1, num2, num3) {
    return num1 + num2 + num3;
};

const result = add(10, 20, 30);
console.log(result);