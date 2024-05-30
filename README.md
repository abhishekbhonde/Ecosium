#Ecosium

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
```

## Entity Details

### User
- `userId`: String (primary key)
- `name`: String
- `email`: String (unique)
- `password`: String
- `address`: String

### Product
- `productId`: String (primary key)
- `name`: String
- `description`: String
- `price`: Number
- `stock`: Number
- `categoryId`: String (foreign key)

### Category
- `categoryId`: String (primary key)
- `name`: String
- `description`: String

### Order
- `orderId`: String (primary key)
- `userId`: String (foreign key)
- `orderDate`: Date
- `totalAmount`: Number
- `status`: String

### OrderItem
- `orderItemId`: String (primary key)
- `orderId`: String (foreign key)
- `productId`: String (foreign key)
- `quantity`: Number
- `price`: Number

### Review
- `reviewId`: String (primary key)
- `userId`: String (foreign key)
- `productId`: String (foreign key)
- `rating`: Number
- `comment`: String

### Cart
- `cartId`: String (primary key)
- `userId`: String (foreign key)
- `createdAt`: Date

### CartItem
- `cartItemId`: String (primary key)
- `cartId`: String (foreign key)
- `productId`: String (foreign key)
- `quantity`: Number
- `price`: Number

### Payment
- `paymentId`: String (primary key)
- `orderId`: String (foreign key)
- `userId`: String (foreign key)
- `amount`: Number
- `paymentDate`: Date
- `paymentMethod`: String

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Stripe/PayPal API keys

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Configure environment variables
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```

4. Start the application
   ```sh
   npm start
   ```

## API Endpoints

### User
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Product
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product (Admin)
- `PUT /api/products/:id` - Update a product (Admin)
- `DELETE /api/products/:id` - Delete a product (Admin)

### Category
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a new category (Admin)
- `PUT /api/categories/:id` - Update a category (Admin)
- `DELETE /api/categories/:id` - Delete a category (Admin)

### Order
- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/myorders` - Get user orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get a single order by ID
- `PUT /api/orders/:id` - Update order status (Admin)

### Review
- `POST /api/reviews` - Create a new review
- `GET /api/reviews/:productId` - Get reviews for a product

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update cart item
- `DELETE /api/cart/:itemId` - Remove item from cart

### Payment
- `POST /api/payments` - Process payment

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines first.

## Acknowledgments
- Thanks to the Node.js, Express.js, and MongoDB communities for their valuable tools and resources.

```

This README file provides a clear, organized structure for your e-commerce application, including an overview, detailed schema, setup instructions, and API endpoints. It’s designed to be informative and easy to follow for developers looking to understand or contribute to the project.
