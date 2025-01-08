document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/products')
      .then(response => response.json())
      .then(data => {
          const productList = document.getElementById('product-list');
          data.forEach(product => {
              const productCard = document.createElement('div');
              productCard.classList.add('product-card');
              productCard.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <h2>${product.name}</h2>
                  <p>${product.description}</p>
                  <p><strong>$${product.price}</strong></p>
                  <button>Add to Cart</button>
              `;
              productList.appendChild(productCard);
          });
      })
      .catch(error => console.error('Error loading products:', error));
});
