const deleteProperty = (arr) => {
    let obj = arr[0];
    let prop = arr[1];
    if (prop in obj) {
        delete obj[prop];
        return "YES";
    } else {
        return "NO";
    }
}

const n = deleteProperty([{ fname: 'John', }, 'fname']);
console.log(n);