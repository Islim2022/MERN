// 1.
// console.log(hello);                                   
// var hello = 'world';                                 
var hello;
console.log(hello); // undefined
hello = 'world';


// 2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

// 3.
var brendan;
function print(){
    var brendan;
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // super cool

// 4.
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food); // chicken
eat(); // half-chicken

// 5.
mean();
console.log(food);
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre); // undefined
genre = "disco";
rewind(); // rock , r&b
console.log(genre); // disco

// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); // san jose
learn(); // seattle, burbank
console.log(dojo); // san 

// 8.
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); //{name: 'Chicago', students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0));
