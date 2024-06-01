
async function getData(){
    const data =await (await fetch('https://dummyjson.com/products')).json();
    const card = document.getElementById('card');
    data.products.forEach(element => {
        // console.log(element)
        const cardData =`
        <img src=${element.images[0]}  class="productImage">
        <h2>${element.title}</h2>
        <h3>${element.category}</h3>
        <h3>${element.availabilityStatus}</h3>
        <h3>${element.price}</h3>
        <p>${element.description}</p>
         ` ;
        const tempContainer = document.createElement('div');
        tempContainer.className = 'cardElements'
        tempContainer.innerHTML = cardData;
        
        card.appendChild(tempContainer);
    });
   
    // console.log(data.products)
}


// data.array.forEach(element => {
//     console.log(element.)
// });

getData();
const searchElements = document.getElementById('SearchBox');


searchElements.addEventListener('keydown', async event => {
        const card = document.getElementById('card');
        card.innerHTML = '';
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchElements.value}`);
        const data = await response.json();
        console.log(data)
        data.products.forEach(element => {
        // console.log(element)
        const cardData =`
        <img src=${element.images[0]}  class="productImage">
        <h2>${element.title}</h2>
        <h3>${element.category}</h3>
        <h3>${element.availabilityStatus}</h3>
        <h3>${element.price}</h3>
        <p>${element.description}</p>
         ` ;
        const tempContainer = document.createElement('div');
        tempContainer.className = 'cardElements'
        tempContainer.innerHTML = cardData;
        
        card.appendChild(tempContainer);
    });

    });


