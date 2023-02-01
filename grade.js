function grade(marks) {
    if (marks >= 0 && marks <= 100) {
        if (marks >= 80) {
            return "your got A+";
        }
        else if (marks >= 60) {
            return "you got A";
        }
        else if (marks >= 40) {
            return "you got B";
        }
        else if (marks >= 33) {
            return "you got C";
        }
        // else{
        return "you got F";
        // }
    }
    // else{
    return "please input 0 to 100 number";
    // }
};

const marks = 99;
const myGrade = grade(marks);
console.log(myGrade);