const show =document.querySelector(".show-window");
document.querySelector("#equal").addEventListener("click" ,result);
document.querySelector("#clear-all").addEventListener("click" , clearAll);
document.querySelector("#clear-last").addEventListener("click" , clear);
const list = document.querySelectorAll(".num");
list.forEach(item => {
    item.addEventListener("click", getNum);
});


function getNum(event){
    const x = event.target.innerText;
    console.log(x);
    if (show.innerHTML == 0 ){
        return show.innerHTML = x; 
    }else{
        return show.innerHTML +=x;
    }
}
function result(){
    const y = show.innerText;
    console.log(eval(y));
    show.innerText = eval(y);
}
function clearAll(){
    show.innerHTML = 0;
}
function clear(){

    const z = show.innerHTML;
    if (z.length === 1){
        show.innerText = 0;
    }else {
        show.innerHTML = z.substring(0, z.length-1);
    }
}