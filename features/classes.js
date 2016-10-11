
//es6 has introduced classes..keyword constructor defines the constructor and it gets invoked once a class is instantiated
class Person{
    constructor(name){
        this.name=typeof name === 'string' ? Person.capitalizeFirstLetter(name) : 'Anonymous'; //static methods can be used within the constructors as well
    }
     //below is how we specify methods within classes
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
    //static methods can be used without creating their instances..they are useful for use cases where a specific method could be used outside the person instances
    static capitalizeFirstLetter(str){
        return str[0].toUpperCase() + str.slice(1);
    }
}

var person1=new Person('rajat'); //class instantiated
//console.log(person1.name); //accessing the name property
person1.sayHello();

var person2=new Person(); //another instantiated class
//console.log(person2.name);
person2.sayHello();

console.log(Person.capitalizeFirstLetter('rajat')); //calling static method