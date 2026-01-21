//push() =("add one or more elements to the end of an array")
//pop() =("remove the last element from an array and returns that element")
//shift =(" remove the first element from an array and returns that element")
//unshift =(" oppsite to shift")
//contact =("combines two or more arrays and return a new array")
//slice = ("returns a shallow copy of a partion of an array")
//jion = ("create a new string by concating all the elements of an array and return a string by a specified separator")
//splice = ("change the contents of an array by removing,replacing")
//indexof() = ("returns the first index at which a given element can be found in array// or  -1  if is not present")
//foreach() = ("excutes a provided function once for each array")


let sports = ["cricket" , "football","tennis",222]
sports.pop("tennis",222)
console.log(sports+"<br>")
console.log(sports.length+"</br>")



let  sports = ["cricket" , "football" , "tennis",222]
sports.unshift("swimming")
sports.shift()



let sports = ["cricket" , "football" , "tennis"]
let score = [350,20,44]
let total = score.concat(sports)
console.log(total);


var sports = [350,20,44,"cricket","football","tennis"]
var myteam = sports.join("*")
console.log(myteam);


let mynumbers = [0,1,2,3,4,5,6,7,8]

let mynewnumbers = mynewnumbers.slice(0,5)

console.log(mynewnumbers +"<br>");

console.log(mynewnumbers)


let mynnumbers = [0,1,2,3,4,5,6,7,8]

let mynewnumbers = mynewnumbers.splice(0,5,"hello team")

console.log(mynewnumbers +"<br>");

console.log(mynewnumbers)


let student = ["amith","ajay","akhi","mahi"];

var newstudent = student.indexOf("akhi");
console.log(newstudent)

let students = ["akhi","mahi","archi","sunny"];

students.forEach(function(item,index){
    console.log(index + 0 + ","+item + "<br>")
})       






























 




        
        






























    )
}



















