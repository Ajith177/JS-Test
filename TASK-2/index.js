let text_1=document.querySelector('#text-1');
let email_1=document.querySelector('#email-1');
let submit_btn=document.querySelector('#submit-btn');
let logout=document.querySelector('#logout');
let title_2=document.querySelector('#title-2');
let list=document.createElement('li');
let list_1=document.createElement('li');
let complete_1=document.querySelector('#complete-1');

submit_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(text_1.value===""|| email_1.value==="")
    {
        alert("please fill out the empty fields")
    }
    else{
        title_2.style.display="block";
        list.innerHTML = text_1.value;
        list_1.innerHTML = email_1.value;
        title_2.appendChild(list);
        title_2.appendChild(list_1);
        
    }
    text_1.value="";
    email_1.value="";
})
logout.addEventListener('click',(event)=>{
    event.preventDefault();
    list_1.innerHTML = "";
    list.innerHTML = "";
    complete_1.innerHTML = "";

});