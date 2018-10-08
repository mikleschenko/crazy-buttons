'user strict';

function random(num) {
    return Math.floor(Math.random() * num);
}

random(window.innerHeight);// передаем ширину окна

//нужен обработчик события mouseenter , передаем объект событие event
function handlerMouseEnter(event) {
    event.target.style.top = random(window.innerHeight - event.target.clientHeight) + "px";
    event.target.style.left = random(window.innerWidth - event.target.clientWidth) + "px";
    console.log(event.target.style.top);
    console.log(event.target.style.left);
}

// let boduContainer=document.querySelector("body");
//
Array.from(document.body.children).forEach(element => {
    element.addEventListener("mouseenter", handlerMouseEnter)
});
