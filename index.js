// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}



function writeCards(names,type){
    let cards = [];
    for (let i = 0; i <names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
        
    }
    return cards;
}

function countDown(count){
    while (count >= 0){
        console.log(count);
        count = count - 1;
    }
}