# Krazy-G Games
A full stack E-Commerce application where you can purchase games for PC and PlayStation. It is a non commercial application that I have created for my portfolio.  

**Link to project:** https://emart-ecommerce-app.herokuapp.com/


## Features:

**Home page:**

![Model](https://i.ibb.co/LCyq3RQ/home.png)



**Product description page:**

![Model](https://i.ibb.co/gFX8W31/product.png)



**Shopping cart:**

![Model](https://i.ibb.co/2hkFbK2/cart.png)



**Payment page:**

![Model](https://i.ibb.co/KVDsLQs/payment.png)

![Model](https://i.ibb.co/6PNK71s/payment-2.png)



**Dashboard:**

![Model](https://i.ibb.co/m0GpR6c/dashboard-1.png)


![Model](https://i.ibb.co/x1yXJrH/dashboard-2.png)


![Model](https://i.ibb.co/ZBNLRhJ/dashboard-3.png)



How It's Made

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This web application is built using vanilla JavaScript. The server is built using Express.js. The database used is MongoDB. It is a single page application in which all pages are rendered in the index.html.

## How to run this project:

Place an .env file in the root folder with the following variables:

JWT_SECRET=anyrandomandsecurestring
PAYPAL_CLIENT_ID=yourpaypalclientidfordevelopementmode
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.oeqzdvi.mongodb.net/?retryWrites=true&w=majority

## Optimizations

It is planned to add multiple other features to make this app more useful to the end users:

1) Sending email for user validation.

2) Spawning and forking more threads in the Express server to support higher spike in traffic.

3) Load balancing

4) More security measures like - DDoS protection.

5) More application features like: ability to read book excerpts, interacting with other users through personal messages and comments.

6) Better Authentication system

## Lessons Learned:

This project helped me learn to build a single page application using vanilla JavaScript.
