const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhishekbhonde8:kNYEB1ajpeC52VHQ@cluster0.hrwm5lp.mongodb.net/newUser', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema
const UserSchema = new mongoose.Schema({
    userId: { type: Number, required: true},
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: String
});

// Product Schema
const ProductSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
}, { timestamps: true });

// Category Schema
const CategorySchema = new mongoose.Schema({
    categoryId: { type: String, required: true, unique: true },
    categoryName: { type: String, required: true },
    description: String
}, { timestamps: true });

// Order Schema
const OrderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderDate: { type: Date, default: Date.now },
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true }
}, { timestamps: true });

// OrderItem Schema
const OrderItemSchema = new mongoose.Schema({
    orderItemId: { type: String, required: true, unique: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

// Review Schema
const ReviewSchema = new mongoose.Schema({
    reviewId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, required: true },
    comment: String
}, { timestamps: true });

// Cart Schema
const CartSchema = new mongoose.Schema({
    cartId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

// CartItem Schema
const CartItemSchema = new mongoose.Schema({
    cartItemId: { type: String, required: true, unique: true },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

// Payment Schema
const PaymentSchema = new mongoose.Schema({
    paymentId: { type: String, required: true, unique: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, required: true }
}, { timestamps: true });

// Models
const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);
const Category = mongoose.model('Category', CategorySchema);
const Order = mongoose.model('Order', OrderSchema);
const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
const Review = mongoose.model('Review', ReviewSchema);
const Cart = mongoose.model('Cart', CartSchema);
const CartItem = mongoose.model('CartItem', CartItemSchema);
const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = {
    User,
    Product,
    Category,
    Order,
    OrderItem,
    Review,
    Cart,
    CartItem,
    Payment
};
