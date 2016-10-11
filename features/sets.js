//es6 supports sets - unique values
var genres=new Set();
 
 //add method of set
 genres.add('rock');
 genres.add('pop');
 genres.add('pop');
 console.log(genres);

 //size of the set
 console.log(genres.size);

 //has- check if an item exists
 console.log(genres.has('trance'));
 console.log(genres.has('pop'));

//delete
console.log(genres.delete('pop'));
console.log(genres);

//clear - deletes entire set
genres.clear();

genres.add('trance');
genres.add('country');

//iterating through our set
genres.forEach(function(genre){
    console.log(genre);
});

//exercise: see if the movies in the set can be added
var movies=new Set();
function addMovie(movie){
    if(movies.has(movie)){
        console.log(`${movie} already exists`);
    }
    else{
        movies.add(movie);
        console.log(`${movie} successfuly added to the set`);
    }
}

addMovie('invictus');
addMovie('the bourne');
addMovie('invictus');
console.log(movies);