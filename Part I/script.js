let count = 1;
let countElement = document.querySelector("#likecount")

function add1(){
    count++;
    countElement.innerText = count + " like(s)"
}