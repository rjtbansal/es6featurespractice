/*es6 feature*/

/*below we are giving a default to name parameter so if no value is supplied 'world' is supplied as a default..this is es6 feature
 */
function sayHello(name='word'){
    // name=name || 'world';   //earlier in es5 and below this is how we had to handle defaults
    console.log('hello '+name+"!");
}

sayHello();
sayHello('people');

function helloName(user={name:'Anon'}){ //specifying default object
    console.log('hello '+user.name+' !');
}

helloName();
helloName({name:'rajat'});