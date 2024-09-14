/* Promises => An Object that manages asynchronous operations.
               Wrap a Promise Object around {asynchronous code}
               "I promise to return a value"
               PENDING -> RESOLVED or REJECTED
               new Promise((resolve, reject) = {asynchronous code})
*/

function waldDog(){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog");
            }
            
        }, 1500);
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash");
        }, 500);
    }) 
}

waldDog().then(value => {console.log(value); return cleanKitchen();})
         .then(value => {console.log(value); return takeOutTrash();})
         .then(value => {console.log(value); console.log("You finished all the chores");})
         .catch(error => console.error(error));