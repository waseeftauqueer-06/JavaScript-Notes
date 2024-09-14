/* Async/Await => Async = makes a function return a promise
                  Await = makes a async function wait for a promise

                  Allows you write asynchronous code in a shynchronous manner
                  Async doesn't have resolve or reject parameters
                  Everything after Await is placed in an event queue
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

async function doChores() {

    try{
        const waldDogResult = await waldDog();
        console.log(waldDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finsished your chores");
    }catch(error){
        console.error(error);
    }

}

doChores();