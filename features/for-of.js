var concerts=[];

concerts.push({
    city:'san jose',
    genre:'edm'
});

concerts.push({
    city:'san francisco',
    genre:'rock'
});

//using es6 for of to iterate concerts array
//object to iterate is after 'of' and individual value is put before 'of'
for(let concert of concerts){
    console.log(`${concert.genre} is taking place in ${concert.city}`);
}

//small exercise..average of all grades
function avgGrades(...grades){
    let grades_len=grades.length;
    let sum=0;
    for(let grade of grades){
        sum+=grade;
    }
    return sum/grades_len;
}

//trying the arrow function for similar thing
var avgGradesArrow= (...grades) => {
    let grades_len=grades.length;
    let sum=0;
    for(let grade of grades){
        sum+=grade;
    }
    return sum/grades_len;
}

console.log(avgGrades(1,44,99));
console.log(avgGradesArrow(1,44,99));