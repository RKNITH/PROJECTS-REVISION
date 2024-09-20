// Sample product data
// const products = [
//     { id: 1, name: 'Product 1', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 2, name: 'Product 2', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 3, name: 'Product 3', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
// ];

// // Cart object to manage cart items
// let cart = {};

// document.addEventListener('DOMContentLoaded', () => {
//     loadProducts();
//     updateCart();
// });

// function loadProducts() {
//     const productList = document.getElementById('product-list');
//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');
//         productDiv.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <div class="product-details">
//                 <h3>${product.name}</h3>
//                 <p>$${product.price.toFixed(2)}</p>
//             </div>
//             <button onclick="addToCart(${product.id})">Add to Cart</button>
//         `;
//         productList.appendChild(productDiv);
//     });
// }

// function addToCart(productId) {
//     if (!cart[productId]) {
//         const product = products.find(p => p.id === productId);
//         cart[productId] = { ...product, quantity: 1 };
//     } else {
//         cart[productId].quantity += 1;
//     }
//     updateCart();
// }

// function updateCart() {
//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');
//     cartItems.innerHTML = '';
//     let total = 0;

//     for (let id in cart) {
//         const cartItem = cart[id];
//         total += cartItem.price * cartItem.quantity;

//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.classList.add('cart-item');
//         cartItemDiv.innerHTML = `
//             <div class="cart-item-details">
//                 <h3>${cartItem.name}</h3>
//                 <p>$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
//             </div>
//             <div class="cart-item-quantity">
//                 <button onclick="removeFromCart(${id})">Remove</button>
//                 <input type="number" value="${cartItem.quantity}" min="1" onchange="updateQuantity(${id}, this.value)">
//             </div>
//         `;
//         cartItems.appendChild(cartItemDiv);
//     }

//     cartTotal.textContent = total.toFixed(2);
//     document.getElementById('checkout-button').disabled = total === 0;
// }

// function removeFromCart(productId) {
//     delete cart[productId];
//     updateCart();
// }

// function updateQuantity(productId, quantity) {
//     if (quantity <= 0) {
//         removeFromCart(productId);
//     } else {
//         cart[productId].quantity = parseInt(quantity);
//         updateCart();
//     }
// }



// **********************************************************************************************************
// const products = [
//     { id: 1, name: 'Product 1', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 2, name: 'Product 2', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 3, name: 'Product 3', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
// ];

// let cart = {}
// const loadProducts = () => {
//     const productList = document.getElementById('product-list')

//     products.forEach(prod => {
//         let productDiv = document.createElement('div')
//         productDiv.classList.add('product');
//         productDiv.innerHTML = `
//          <img src=${prod.image} alt=${prod.name} />
//          <div class ='product-details'>
//             <h3>${prod.name}</h3>
//             <p>$${prod.price.toFixed(2)}</p>
//          </div>
//          <button class='' onClick ='addToCart(${prod.id})'>Add</button>


//         `




//         productList.append(productDiv)
//     })



// }
// const addToCart = (productId) => {
//     if (!cart[productId]) {
//         let product = products.find(p => p.id === productId)
//         cart[productId] = { ...product, quantity: 1 }

//     } else {
//         cart[productId].quantity += 1
//     }
//     updateCart()



// }




// function updateCart() {
//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');
//     cartItems.innerHTML = '';
//     let total = 0;

//     for (let id in cart) {
//         const cartItem = cart[id];
//         total += cartItem.price * cartItem.quantity;

//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.classList.add('cart-item');
//         cartItemDiv.innerHTML = `
//             <div class="cart-item-details">
//                 <h3>${cartItem.name}</h3>
//                 <p>$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
//             </div>
//             <div class="cart-item-quantity">
//                 <button onclick="removeFromCart(${id})">Remove</button>
//                 <input type="number" value="${cartItem.quantity}" min="1" onchange="updateQuantity(${id}, this.value)">
//             </div>
//         `;
//         cartItems.appendChild(cartItemDiv);
//     }

//     cartTotal.textContent = total.toFixed(2);
//     document.getElementById('checkout-button').disabled = total === 0;
// }

// function removeFromCart(productId) {
//     delete cart[productId];
//     updateCart();
// }












// document.addEventListener('DOMContentLoaded', () => {
//     loadProducts()
//     updateCart()
// })


// *******************************************************************************************************



// const products = [
//     { id: 1, name: 'Product 1', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 2, name: 'Product 2', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 3, name: 'Product 3', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
// ];

// let cart = {}
// const loadProducts = () => {
//     const productList = document.getElementById('product-list')
//     products.forEach(prod => {
//         let productDiv = document.createElement('div')
//         productDiv.classList.add('product')
//         productDiv.innerHTML = `
//         <img src=${prod.image} alt=${prod.name} />
//         <div class ='product-details'>
//         <h3>${prod.name}</h3>
//         <p>$${prod.price.toFixed(2)}</p></div>
//         <button onClick ='addToCart(${prod.id})'>Add<button>
//         `
//         productList.append(productDiv)

//     })
// }
// const addToCart = (productId) => {
//     if (!cart[productId]) {
//         let product = products.find(p => p.id === productId)
//         cart[productId] = { ...product, quantity: 1 }

//     }
//     else {
//         cart[productId].quantity += 1

//     }
//     updateCart()

// }

// function updateCart() {
//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');
//     cartItems.innerHTML = '';
//     let total = 0;

//     for (let id in cart) {
//         const cartItem = cart[id];
//         total += cartItem.price * cartItem.quantity;

//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.classList.add('cart-item');
//         cartItemDiv.innerHTML = `
//             <div class="cart-item-details">
//                 <h3>${cartItem.name}</h3>
//                 <p>$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
//             </div>
//             <div class="cart-item-quantity">
//                 <button onclick="removeFromCart(${id})">Remove</button>
//                 <input type="number" value="${cartItem.quantity}" min="1" onchange="updateQuantity(${id}, this.value)">
//             </div>
//         `;
//         cartItems.appendChild(cartItemDiv);
//     }

//     cartTotal.textContent = total.toFixed(2);
//     document.getElementById('checkout-button').disabled = total === 0;
// }

// function removeFromCart(productId) {
//     delete cart[productId];
//     updateCart();
// }

// document.addEventListener('DOMContentLoaded', () => {
//     loadProducts()
//     updateCart()
// })





// *888888888888888888888*********************************************


// const productList = document.getElementById('product-list')
// const cartItems = document.getElementById('cart-items')
// const cartTotal = document.getElementById('cart-total')


// const products = [
//     { id: 1, name: 'Product 1', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 2, name: 'Product 2', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
//     { id: 3, name: 'Product 3', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
// ];

// let cart = {}


// const loadProducts = () => {
//     products.forEach(prod => {
//         const productDiv = document.createElement('div')
//         productDiv.classList.add('product')
//         productDiv.innerHTML = `
//         <img src=${prod.image} alt=${prod.name} />
//         <div class ='product-details'>
//         <h3>${prod.name}</h3>
//         <p>$${prod.price.toFixed(2)}</p></div>
//         <button onClick ='addToCart(${prod.id})'>Add<button>
//         `
//         productList.appendChild(productDiv)
//     })
// }

// const addToCart = (productId) => {
//     if (!cart[productId]) {
//         let product = products.find(p => p.id === productId)
//         cart[productId] = { ...product, quantity: 1 }
//     }
//     else {
//         cart[productId].quantity += 1
//     }
//     updateCart()

// }

// const updateCart = () => {
//     cartItems.innerHTML = ''
//     let total = 0
//     for (let id in cart) {
//         const cartItem = cart[id];
//         total += cartItem.price * cartItem.quantity;

//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.classList.add('cart-item');
//         cartItemDiv.innerHTML = `
//             <div class="cart-item-details">
//                 <h3>${cartItem.name}</h3>
//                 <p>$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
//             </div>
//             <div class="cart-item-quantity">
//                 <button onclick="removeFromCart(${id})">Remove</button>
//                 <input type="text" value="${cartItem.quantity}" min="1" readonly">
//             </div>
//         `;
//         cartItems.appendChild(cartItemDiv);
//     }

//     cartTotal.textContent = total.toFixed(2);
//     document.getElementById('checkout-button').disabled = total === 0;
// }


// function removeFromCart(productId) {
//     delete cart[productId];
//     updateCart();
// }


// document.addEventListener('DOMContentLoaded', () => {
//     loadProducts()
//     updateCart()
// })

// *******************************************************************************





const productList = document.getElementById('product-list')
const cartItems = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')


const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
    { id: 2, name: 'Product 2', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTzvbCWtpEmxUGC3MqxlMjuGE8lp_NDJRJw&s' },
];

let cart = {}

const loadProducts = () => {
    products.forEach(prod => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <img src=${prod.image} alt=${prod.name} />
        <div class ='product-details'>
        <h3>${prod.name}</h3>
        <p>$${prod.price.toFixed(2)}</p></div>
        <button onClick ='addToCart(${prod.id})'>Add</button>
        `
        productList.appendChild(productDiv)
    })
}


const addToCart = (productId) => {
    if (!cart[productId]) {
        let product = products.find(prod => prod.id = productId)

        cart[productId] = { ...product, quantity: 1 }
    }
    else {
        cart[productId].quantity += 1
    }

    updateCart()


}

const updateCart = () => {
    cartItems.innerHTML = ''
    let total = 0
    for (let id in cart) {
        const cartItem = cart[id];
        total += cartItem.price * cartItem.quantity;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <div class="cart-item-details">
                <h3>${cartItem.name}</h3>
                <p>$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="removeFromCart(${id})">Remove</button>
                <input type="text" value="${cartItem.quantity}" min="1" readonly">
            </div>
        `;
        cartItems.appendChild(cartItemDiv);
    }

    cartTotal.textContent = total.toFixed(2);
    document.getElementById('checkout-button').disabled = total === 0;
}


function removeFromCart(productId) {
    delete cart[productId];
    updateCart();
}




document.addEventListener('DOMContentLoaded', () => {
    loadProducts()
    updateCart()
})

