let count = 0;

let countElement = document.getElementById('count');

var lowerBtn = document.getElementById('minus').addEventListener("click", ()=>{
    lowerCount();
});

var AddBtn = document.getElementById('plus').addEventListener("click", ()=>{
    addCount();
});

let lowerCount = () => {
    if(count > 0){
        count -= 1;
        countElement.innerText = count;
    }
}

let addCount = () => {
    if(count < 50){
        count += 1;
        countElement.innerText = count;
    }
}
