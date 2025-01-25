require('dotenv').config()

const apiKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(apiKey);
const express = require('express');
const app = express();
app.use(express.static('public'));
