"use strict"

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))


    function findMatches(wordtoMatch, cities){
        return cities.filter(place =>{
            
        })
    }