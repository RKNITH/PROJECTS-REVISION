// Sample product data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s" },
    { id: 2, name: "Laptop", category: "electronics", price: 899, image: "https://m.media-amazon.com/images/I/61+r3+JstZL._SX450_.jpg" },
    { id: 3, name: "T-shirt", category: "clothing", price: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAUioMRqtwqMnztNK9CB98U35MmEMw4qVQg&s" },
    { id: 4, name: "Sofa", category: "furniture", price: 299, image: "https://t4.ftcdn.net/jpg/04/23/65/57/360_F_423655780_VSZ03nlUy0s1RP39cRWUHLj2bbWi2ebO.jpg" },
    { id: 5, name: "Jacket", category: "clothing", price: 79, image: "https://media.istockphoto.com/id/1342121693/photo/blue-sport-winter-jacket-isolated-on-white-warm-clothes.jpg?s=612x612&w=0&k=20&c=l-hDjB6RgtSDSDnqJHOJAQds_2xEBPL9ZncaFQdcVtQ=" },
    { id: 6, name: "TV", category: "electronics", price: 599, image: "https://m.media-amazon.com/images/I/31aDWE4msZL.jpg" }
];

// Get DOM elements
const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const priceSort = document.getElementById('price-sort');

// Function to display products
const displayProducts = (filteredProducts) => {
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;

        productList.appendChild(productElement);
    });
};

// Filter and search products
const filterProducts = () => {
    let filteredProducts = products;

    // Filter by search query
    const searchQuery = searchInput.value.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    // Filter by category
    const categoryValue = categoryFilter.value;
    if (categoryValue !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryValue);
    }

    // Sort by price
    const sortValue = priceSort.value;
    if (sortValue === 'asc') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'desc') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
};

// Event listeners for filtering, sorting, and searching
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceSort.addEventListener('change', filterProducts);

// Initial display of products
displayProducts(products);


// //***********************************************************************************************************8