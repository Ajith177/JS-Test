let count=0;
let btn=document.querySelector('#submit');
let display=document.querySelector('#display');
btn.addEventListener('click',function(){
    count=count+1;
    display.innerHTML=count;
});