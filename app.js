const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Sample product data
const products = [
    {
        id: 1,
        name: 'Quarter of a sandwich',
        description: 'Great for feeding an entire ant colony',
        price: 49.99,
        image: 'https://via.placeholder.com/300'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is another awesome product.',
        price: 39.99,
        image: 'https://via.placeholder.com/300'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'You will love this product.',
        price: 19.99,
        image: 'https://via.placeholder.com/300'
    }
];

// API route to fetch product data
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
