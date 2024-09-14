//window.prompt() or professional way
//document.getting_attribute("itsname").operation

let username;

document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("nameinput").value;
    document.getElementById("headname").textContent = username;
    console.log(username);
};
