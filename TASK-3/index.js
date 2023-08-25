let submit_btn=document.querySelector('#submit');
submit_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    submit_btn.value="Clicked!"
    submit_btn.style.backgroundColor="yellowgreen";
});