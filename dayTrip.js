"use strict"

function randomizeArray(array){
    let l = array.length;
    let pos = Math.floor(Math.random() * array.length);
    let roundPos = Math.round(pos);
    let result = array[roundPos];
    alert(result);
}

let destinations = ["Spain", "Chile", "Poland", "Canada"];
let restaurant = ["Chili's", "McDonalds", "Denny's", "Food from home"]
let transport = ["You're walking, and you may have to swim", "Helicopter", "Airplane"]
let entertainment = ["Mariachi Concert", "Drive-in Movie", "Comedy Show"]

