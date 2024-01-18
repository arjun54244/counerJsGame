const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLable");


let count = 0;

increseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}
decreaseBtn.onclick = function(){
    count>0?count-- :countLable.textContent = "number is 0";
    countLable.textContent = count;
}
resetBtn.onclick = function () {
    count=0;
    countLable.textContent="Reseted"
}
