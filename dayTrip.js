"use strict"

function randomizeArray(array){
    let l = array.length;
    let pos = Math.floor(Math.random() * array.length);
    let roundPos = Math.round(pos);
    let result = array[roundPos];
    return(result);
}




let destinations = ["Miami", "Denver", "Milwaukee", "Los Angeles", "Kansas City", "Brooklyn"];
let restaurant = ["Chili's", "McDonalds", "Denny's", "Food from home", "Olive Garden", "Red Lobster"]
let transport = ["You're walking, and you may have to swim", "Helicopter", "Airplane", "Uber", "Rent a Car"]
let entertainment = ["Concert", "Drive-in Movie", "Comedy Show", "Mini Golf", "Go see a play"]


let dest = randomizeArray(destinations)
let rest = randomizeArray(restaurant)
let tran = randomizeArray(transport)
let ente = randomizeArray(entertainment)

function functionOne(){
    dest = randomizeArray(destinations)
    console.log(dest)
}
function functionTwo(){
    rest = randomizeArray(restaurant)
    console.log(rest)
}
function functionThree(){
    tran = randomizeArray(transport)
    console.log(tran)
}
function functionFour(){
    ente = randomizeArray(entertainment)
    console.log(ente)
}
