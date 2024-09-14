let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => {window.alert("Hey This is Walter White")}, 3000 );
}

function stopTimer(){
    clearTimeout(timeoutId);
}