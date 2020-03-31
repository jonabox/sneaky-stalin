'use strict';

//capitalists = blue
//socialists = red


let capitalistCards = new Array(6).fill("capitalist");
let socialistCards = new Array(11).fill("socialist");

let cards = capitalistCards.concat(socialistCards);
cards = shuffle(cards);
console.log(cards);

class Board{
    constructor(){
        this
    }
}

//takes an array of cards and returns a random permutation i.e. shuffles
function shuffle(array){
    let cards = [...array]; //create copy
    for(let i = cards.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
      }
    return cards
}

module.exports = Board;