var my_map=new Map();

//set key value pairs
my_map.set('name','rajat');

//get value from key
console.log(my_map.get('name'));

//has checks if key exists
console.log(my_map.has('name'));
console.log(my_map.has('address'));

my_map.set('address','2225 mclaughlin ave');

//delete specific key value pair
console.log(my_map.delete('name'));

//clear- delete entire map
my_map.clear();

//size
console.log(my_map.size);

//maps allow us to have keys of any type..before maps objects attributes always had to be string type
var user={name:'rajat'};
my_map.set(user,'san jose'); //associating location san jose with user object
console.log(my_map.get(user)); //accessing location wth user object

//example 2
var names=new Map();
names.set(1,'rajat');
names.set(2,'raghav');
names.set(3,'rahul');
names.set(4,'john');

//spitting out entire content of maps..need to specify spread operator within arrays
console.log([...names]); 
console.log(...names); //will spit out individual arrays

//spitting out only the keys within the Map
console.log(names.keys());
//only the values
console.log(names.values());
console.log('-----------------------------------------------------');
//simple exercise: passing a location and get the weather info saved in maps
var location={name:'san jose'};
var location1={name:'santa clara'};
var weathermap=new Map();

var setWeather=(location,weather) => {
    weathermap.set(location,weather);
}

var getWeather=(location) => {
    if(weathermap.has(location)){
        return weathermap.get(location);
    }else{
        return "No location found";
    }
}

setWeather(location,32);
setWeather(location1,23);
console.log(`Current weather at ${location.name} : ${getWeather(location)}`);
console.log(`Current weather at ${location1.name} : ${getWeather(location1)}`);
