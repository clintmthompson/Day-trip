"use strict"

function randomizeArray(array){
    let l = array.length;
    let pos = Math.floor(Math.random() * array.length);
    let roundPos = Math.round(pos);
    let result = array[roundPos];
    return(result);
}




let destinations = ["Spain", "Chile", "Poland", "Canada"];
let restaurant = ["Chili's", "McDonalds", "Denny's", "Food from home"]
let transport = ["You're walking, and you may have to swim", "Helicopter", "Airplane"]
let entertainment = ["Mariachi Concert", "Drive-in Movie", "Comedy Show"]


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