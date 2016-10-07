function greet(name='Rajat'){
    console.log("Hello "+name+".");

    //using template string: ES6 feature
    //enclosing between backticks `` and using ${} within that we specify js
    console.log(`Hello ${name}!`);
}

greet();
greet('jane');

//using just backticks also considers whitespaces and newlines
console.log(`All whitespaces and newlines would be considered
we should use es6 from here on.
regards,
Rajat
`);

var person={
    name:'rajat',
    age:25
};

var default_person={
    name:'Anonymous',
    age:0
};

function greetName(person=default_person){
    console.log(`Hello ${person.name}. 
You are ${person.age} years old`);
}

greetName(person);
greetName();