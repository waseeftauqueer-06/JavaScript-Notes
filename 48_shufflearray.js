//shuffling an array - Fisher-Yates Algorithm

const cards = ['a', 2, 3, 4, 5, 6, 6 ,8, 9, 10, 'd', 'e', 'w'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i >0; i --){
        const random = Math.floor(Math.random() * (i+1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}