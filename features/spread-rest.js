function add(num1,num2){
    return num1+num2;
}

console.log(add(3,4));

var arr=[4,5];
// ... is the spread operator introduced in es6..it allows us to pass in arrays or variables for the number of args required
//here add function accepts 2 args and our arr has 2 elements..using spread operator we can pass dynamically an array of 2 elements
//note that if array size exceeds the number of arguments as expected by the function then the extra elements are ignored
console.log(add(...arr));

//spread operator can also be used to merge various arrays
var arr1=[1,2,3];
var arr2=[5,7,10];
var merged_arr=[10, ...arr1, ...arr2, 25]; //we can also add remaining elements
merged_arr.push(...[24,45,6]); //pushing more elements in array directly
console.log(merged_arr);

//using rest params(useful while passing args to functions)
//first arg type will recieve the first parameter and the remaining will be added to nums
function numbers(type,...nums){ //all args passed are getting coverted to an array
    nums.forEach(function(num){
        console.log(`Num=${num} is of the type ${type}`);
    });
}
//passing multiple arguments
numbers('numbers',3,34,5,12);


//adder function..adding first number to rest of them
function adder(adder, ...nums){
    console.log(`Values recieved: ${adder},${nums}`);
    nums.forEach(function(num){
        console.log(`${adder}+${num}=${adder+num}`);
    });
}
//2 should be added to remaining numbers
adder(2,4,6,7);