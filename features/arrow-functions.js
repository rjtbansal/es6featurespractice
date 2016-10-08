var names=['rajat','john','james'];
var group='developers';
//normal function  call
names.forEach(function(name){
    console.log(name);
});

console.log('');

//using es6 arrow functions..for single statement no curly braces are needed after =>
names.forEach((name) => console.log(name));

//taking multiple statements scenario
names.forEach((name) => {
    console.log(`Welcome ${group}`);
    console.log(`Hello ${name}`);
});

//another way to create functions
//adding 2 numbers and returning sum using arrow function..in a one liner the return is called automatically
var add = (num1,num2) => num1 + num2;
console.log(add(5,6));

//scenario to explicitly return a statement
var addsix= (num1,num2) => {
    var six=6;
    return num1+num2+six;
}
console.log(addsix(5,5));


//understanding this binding

//before es6
var person={
    name:'rajat',
    likes:['eating','travelling','sleeping'],
    getDetails: function(){
        var self=this;
        return function(){
            console.log(self.name+' likes '+self.likes[1]); //inside here we dont have access to this outside ..so we use a workaround
        }
    }
};

//with es6 this doesnt lose its context
var person1={
    name:'rajat',
    likes:['eating','travelling','sleeping'],
    getDetails: function(){
        return () => {
            console.log(this.name+' likes '+this.likes[0]); //inside here we dont have access to this outside ..so we use a workaround
        }
    },
    getLikes: function(){
        this.likes.forEach((like) => console.log(`${this.name} likes ${like}`));
    }
};


person.getDetails()();
person1.getDetails()();
person1.getLikes();