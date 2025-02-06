// Easy way
// let username;
// username = window.prompt("What is your name?");
// console.log(`Welcome ${username}`);

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myH1").textContent = (`Hello bestie!! ${username}`);
}