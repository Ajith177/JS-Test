let submitting_btn=document.querySelector('#submitting_btn');
let store = document.querySelector('.image-container')
fetch(`https://fakestoreapi.com/products/`)
.then((response)=>response.json())
.then((response) =>{
    submitting_btn.addEventListener('click',(event)=>{
        event.preventDefault();
        response.map((value)=>{
            console.log(value.image)
            let img = document.createElement('img')
            img.src = value.image
            store.appendChild(img).setAttribute('class','javascript_images')
        })
    })
   
});