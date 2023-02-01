let laptop = {
    color: "silver",
    ram: 128,
    price: 56000,
    monitor: "60 hz",
};

for (let key in laptop) {  // property name in object name
    const value = laptop[key];
    // console.log(key, value);
};

//
function objKeyValue(laptop) {
    let details = [];
    for (let key in laptop) {
        const value = laptop[key];
        const detail = `${key}: ${value}`;
        details.push(detail);
        console.log(key, value);
    }
    return details;
};

// console.log(objKeyValue(laptop));

objKeyValue(laptop);