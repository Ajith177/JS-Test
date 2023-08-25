// function loadImage(url) {
//     console.log(url);
//     return new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.addEventListener('load', e => resolve(img));
//         img.addEventListener('error', (e) => {
//             reject(new Error('image is failed to load'))
//         });
//         // img.src = url;
//     })
// }
// loadImage('https://fakestoreapi.com/products/')
//     .then(img => document.getElementById("image-container")
//         .appendChild(img))
//     .catch(error => console.error(error));

let store = document.querySelector('.image-container')
fetch(`https://fakestoreapi.com/products/`)
.then((response)=>response.json())
.then((response) =>{
    response.map((value)=>{
        console.log(value.image)
        let img = document.createElement('img')
        img.src = value.image
        store.appendChild(img)
    })
})

// fetch('https://fakestoreapi.com/products/').then((response)=>response.json()).then(response)