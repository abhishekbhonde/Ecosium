# E-Commerce Application

## Overview
This is a comprehensive e-commerce application built using Node.js, Express.js, and MongoDB. It features user authentication, product listing, searching, and filtering, shopping cart and checkout systems, order management for users and admins, payment integration, and a review and rating system for products.

## Features
- User authentication and profile management
- Product listing, searching, and filtering
- Shopping cart and checkout system
- Order management for users and admins
- Payment integration (Stripe, PayPal)
- Review and rating system for products

## Entity-Relationship Diagram
The application is structured around the following entities and their relationships:

```plaintext
+----------------+       +-----------------+       +--------------+
|     User       |       |     Product     |       |   Category   |
|----------------|       |-----------------|       |--------------|
| userId         | 1   M | productId       | M   1 | categoryId   |
| name           |-------| name            |-------| name         |
| email          |       | description     |       | description  |
| password       |       | price           |       +--------------+
| address        |       | stock           |
+----------------+       | categoryId      |       +--------------+
                         +-----------------+       |    Review    |
                                                    |--------------|
                                                    | reviewId     |
+----------------+       +-----------------+       | userId       |
|     Order      |       |    OrderItem    |       | productId    |
|----------------|       |-----------------|       | rating       |
| orderId        | 1   M | orderItemId     | M   1 | comment      |
| userId         |-------| orderId         |-------+--------------+
| orderDate      |       | productId       |
| totalAmount    |       | quantity        |
| status         |       | price           |
+----------------+       +-----------------+       +--------------+
                                                    |    Cart      |
                                                    |--------------|
+----------------+       +-----------------+       | cartId       |
|    Payment     |       |    CartItem     |       | userId       |
|----------------|       |-----------------|       | createdAt    |
| paymentId      | 1   1 | cartItemId      | M   1 +--------------+
| orderId        |-------| cartId          |
| userId         |       | productId       |
| amount         |       | quantity        |
| paymentDate    |       | price           |
| paymentMethod  |       +-----------------+
+----------------+
