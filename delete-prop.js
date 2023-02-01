const deleteProperty = (arr) => {
    let obj = arr[0];
    let prop = arr[1];
    const firstProp = Object.keys(obj)[0];
    if (firstProp === prop) {
        // if (prop in obj) {
        delete obj[prop];
        return "YES";
    }

    else {
        return "NO";
    }
}

const n = deleteProperty([{ fname: 'John', }, 'fname']);
console.log(n);