const port=3000; //cant change values or reassign in future
console.log(port);

//port=5000; will throw error because we are altering a const values

//var port=2000; will throw error 'port has already been declared'

/**
 * Note a const object's property can be changed..see below 
 */
const CONFIG={
    port:3000,
    type:'ethernet'
};

console.log(CONFIG);
CONFIG.port=3002; //changing port property
console.log(CONFIG); 