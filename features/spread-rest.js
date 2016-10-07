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

