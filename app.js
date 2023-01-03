
let products = document.querySelector('#products');

async function fetchProducts() {
    const data = await fetch('https://fakestoreapi.com/products');
    const json = await data.json();
    json.map((product) => 
        products.innerHTML += `<div class="card" id="card">
        <div class="card-title">
            <h4 class="product-title">${product.title}</h4>
        </div>
        <div class="card-body">
            <img class="product-img" src="${product.image}" alt="">
            <p class="product-desc">${product.description}</p>
           <div class="p-b">
                <h4 class="product-price"> $ ${product.price}</h4>
                <a class="buy-btn" href="">Buy</a>
           </div>
        </div>
    </div>`
    );
}

fetchProducts();