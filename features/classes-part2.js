
class Person{
    constructor(name){
        this.name=typeof name === 'string' ? name : 'Anonymous'; 
    }
    
    set name(val){ //setter function
        this._name=Person.capitalizeFirstLetter(val); //we cant use this.varname...its always this._varname..same goes for setter
    }

    get name(){ //getter
        return this._name;
    }

    sayHello(){
        console.log(`Hello ${this.name}`);
    }
    
    static capitalizeFirstLetter(str){
        return str[0].toUpperCase() + str.slice(1);
    }
}

var person1=new Person('rajat'); 
person1.sayHello();
person1.name='randy'; //uses set to capitalize first letter dynamically
person1.sayHello();

var person2=new Person(); 

person2.sayHello();

console.log(Person.capitalizeFirstLetter('rajat')); 

//get and set not just work on classes but also on objects
var obj={
    set age(val){
        this._age=val;
    },
    get age(){
        return this._age;
    }
}

obj.age=25;
console.log(obj.age);