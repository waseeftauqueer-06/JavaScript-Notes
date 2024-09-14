function convert(){
    const textInput = document.getElementById("textBox").value;
    textInput2 = Number(textInput);
    const option = document.getElementById("toCelsius");
    const option2 = document.getElementById("toFahrenheit");

    let answer;

    if(option.checked){
        answer = (textInput2 - 32) * 5/9;
    }
    else if(option2.checked){
        answer = (9/5) * textInput2 + 32;
    }
    else{
        window.alert("Choose a suitable option");
    }
    document.getElementById("result").textContent = `Converted answer => 🔥${answer}`;
}